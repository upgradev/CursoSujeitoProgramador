import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

import "./filme-info.css";

export default function Filme() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [filme, setFilme] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFilme = async () => {
      const response = await api.get(`/r-api/?api=filmes/${id}`);

      if (response.data.length === 0) {
        //tentou acessar com id que não existe
        navigate("/");
        return;
      }

      setFilme(response.data);
      setLoading(false);
    };

    loadFilme();

    return () => {};
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando......</h1>
      </div>
    );
  }

  const salvaFilme = () => {
    const minhaLista = localStorage.getItem("filmes");

    let filmesSalvos = JSON.parse(minhaLista) || [];

    //set tiver algum filme salvo com mesmo id ignorar
    const hasFilme = filmesSalvos.some(
      (filmeSalvo) => filmeSalvo.id === filme.id
    );

    if (hasFilme) {
      toast.info("Você ja possui esse filme salvo");
      return;
      // para execução do codigo aqui
    }

    filmesSalvos.push(filme);
    localStorage.setItem("filmes", JSON.stringify(filmesSalvos));
    toast.success("Filme salvo com sucesso");
  };

  return (
    <div className="filme-info">
      <h1> {filme.nome} </h1>
      <img src={filme.foto} alt={filme.nome} />
      <h3>Sinopse</h3>
      {filme.sinopse}

      <div className="botoes">
        <button onClick={salvaFilme}>Salvar</button>
        <button>
          <a
            target="_blank"
            href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}
