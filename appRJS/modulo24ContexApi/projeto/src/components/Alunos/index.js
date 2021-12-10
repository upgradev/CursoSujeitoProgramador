import React, { useContext } from "react";
import { UserContext } from "../../context/user";
import Nome from "../Nome";

export default function Alunos() {
  const { qtdAlunos } = useContext(UserContext);

  return (
    <div>
      <h2>Quantidade de Alunos: {qtdAlunos} </h2>
      <Nome />
    </div>
  );
}
