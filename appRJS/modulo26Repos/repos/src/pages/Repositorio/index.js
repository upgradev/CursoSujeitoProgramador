import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Owner, Loading, BackButton, IssuesList } from "./styles";
import { FaArrowLeft } from "react-icons/fa";

import api from "../../services/api";

export default function Repositorio() {
  const { repositorio } = useParams();

  const [reposit, setReposit] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const nomeRepo = repositorio;

      const [repositorioData, issuesData] = await Promise.all([
        api.get(`/repos/${nomeRepo}`),
        api.get(`/repos/${nomeRepo}/issues`, {
          params: {
            state: "open",
            per_page: 5,
          },
        }),
      ]);

      setReposit(repositorioData.data);

      setIssues(issuesData.data);
      setLoading(false);
    };
    load();
  }, [repositorio]);

  if (loading) {
    return (
      <Loading>
        <h1>carregando</h1>
      </Loading>
    );
  }

  return (
    <Container>
      <BackButton to="/">
        <FaArrowLeft color="#000" size={30} />
      </BackButton>
      <Owner>
        <img src={reposit.owner.avatar_url} alt={reposit.owner.login} />
        <h1>{reposit.name}</h1>
        <p> {reposit.description} </p>
      </Owner>

      <IssuesList>
        {issues.map((issue) => (
          <li key={String(issue.id)}>
            <img src={issue.user.avatar_url} alt={issue.user.login} />
            <div>
              <strong>
                <a href={issue.html_url}>{issue.title}</a>
                {issue.labels.map((label) => (
                  <span key={String(label.id)}> {label.name} </span>
                ))}
              </strong>
              <p> {issue.user.login} </p>
            </div>
          </li>
        ))}
      </IssuesList>
    </Container>
  );
}
