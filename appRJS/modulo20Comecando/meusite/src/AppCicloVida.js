import React, { Component } from "react";

export default class App extends Component {
  // primeiro a ser carregado
  constructor(props) {
    super(props);
    this.state = {
      hora: "00:00:00",
    };
  }

  // primeiro a ser carregado, monta componente, por exemplo consumindo uma api
  componentDidMount() {
    setInterval(() => {
      this.setState({ hora: new Date().toLocaleTimeString() });
    }, 1000);
  }

//   toda vez q atualizar algum state ou componente ele é chamado
  componentDidUpdate(){
    //   console.log("Atualizou");
  }

//   retorna boolean se quer atualizar um estado ou não
//   shouldComponentUpdate(){

//   }

  render() {
    return (
      <div>
        <h1>Meu Projeto {this.state.hora}</h1>
      </div>
    );
  }
}
