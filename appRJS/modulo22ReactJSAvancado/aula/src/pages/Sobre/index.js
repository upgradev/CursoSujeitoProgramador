import React from 'react';
import { Link } from "react-router-dom";


export default function Sobre() {
 return (
   <div>
       <h1>Sobre o curso</h1>
       <Link to="/">Home</Link><br />
       <Link to="/contatos">Contatos</Link>
   </div>
 );
}