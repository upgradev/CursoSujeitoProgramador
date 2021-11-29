import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
    };
    this.sair = this.sair.bind(this);
    this.entrar = this.entrar.bind(this);
  }

  entrar() {
    this.setState({ status: true });
  }

  sair() {
    this.setState({ status: false });
  }

  render() {
    return (
      <div>
        {this.state.status ? (
          <div>
            <h2>Bem Vindo ao Sistema</h2>
            <button onClick={this.sair}>Sair do sistema</button>
          </div>
        ) : (
          <div>
            <h2>Olá Visitante, faça o login </h2>
            <button onClick={this.entrar}>Entrar no sistema</button>
          </div>
        )}

        {/* {
                this.state.status === 1 && 
                <h1>Bem vindo ao sistema</h1>
            }
            <div>
                <h2>Curso ReactJS</h2>
            </div> */}
      </div>
    );
  }
}
