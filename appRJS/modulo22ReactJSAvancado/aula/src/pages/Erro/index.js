import React from "react";
import { Link } from "react-router-dom";

export default function Erro() {
  return (
    <div>
      <h1>Hum, parece que essa pagina não existe</h1>

      <span>Você pode esta procurando: </span>
      <br />
      <Link to="/">Home</Link>
      <br />
      <Link to="/sobre">Sobre</Link>
      <br />
      <Link to="/contatos">Contatos</Link>
    </div>
  );
}
