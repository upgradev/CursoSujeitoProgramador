class Pessoa {
  constructor() {
    this.nome = "";
    this.sobrenome = "";
  }

  nomePessoa(primeiroNome) {
    this.nome = primeiroNome;
    console.log("Meu nome é: " + this.nome);
  }

  segundoNome(segundoNome) {
    this.sobrenome = segundoNome;
    console.log("Meu sobrenome é " + this.sobrenome);
  }

  nomeCompleto() {
    let nomecompleto = this.nome + " " + this.sobrenome;
    console.log(nomecompleto);
  }
}

let pessoa1 = new Pessoa();
pessoa1.nomePessoa("Claudia");
pessoa1.segundoNome("Teste");
pessoa1.nomeCompleto();
