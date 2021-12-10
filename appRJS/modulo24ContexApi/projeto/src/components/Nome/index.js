import React, { useContext } from "react";
import { UserContext } from "../../context/user";

export default function Nome() {
  const { alunos, setAlunos } = useContext(UserContext);
  return (
    <div>
      <span style={{ color: "#FF0000" }}>Bem vindo: {alunos}</span>
      <br />
      <button onClick={() => setAlunos("ANA")}>Troca Nome</button>
    </div>
  );
}
