import React from 'react';
import { Link } from "react-router-dom";

export default function Home() {
 return (
   <div>
       <h1>Bem vindo pagina home</h1>
       <Link to="/">Home</Link><br />
       <Link to="/sobre">Sobre</Link><br />
       <Link to="/contatos">Contatos</Link>
   </div>
 );
}