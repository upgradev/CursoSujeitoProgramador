import React from "react";

const Equipe = (props) => {
  return (
    <div>
      <Sobre nome={props.nome} cargo={props.cargo} idade={props.idade} />
      <Social fb={props.facebook} />
      <hr />
    </div>
  );
};

const Sobre = (props) => {
  return (
    <div>
      <h2>Olá sou o(a) {props.nome}</h2>
      <h3>Cargo: {props.cargo}</h3>
      <h3>Idade: {props.idade} </h3>
    </div>
  );
};

const Social = (props) => {
    return(
        <div>
            <a href={props.fb}>Facebook</a>
            <a >LinkedIn</a>
            <a >YouTube</a>
        </div>
    )
}

export default function App() {
  return (
    <div>
      <h1>Conheça nossa equipe</h1>
      <Equipe nome="Cleison" cargo="Programador" idade="35" facebook="https://facebook.com" />
      <Equipe nome="Claudia" cargo="Web designer teste" idade="37" facebook="https://facebook.com" />
      <Equipe nome="Ana" cargo="Web designer" idade="37" facebook="https://facebook.com" />
    </div>
  );
}
