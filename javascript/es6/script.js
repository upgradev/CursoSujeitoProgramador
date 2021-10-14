///////////////////// classes

class List {
  constructor() {
    this.data = [];
  }
  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class ListaTarefas extends List {
  constructor() {
    //herdar tudo
    super();
    this.nome = "maria";
    // this.tarefas = [];
  }
  // addTarefa() {
  //   this.tarefas.push("Nova tarefa");
  //   console.log(this.tarefas);
  // }
  mostrarNome() {
    console.log(this.nome);
  }
}

const minhasTarefas = new ListaTarefas();

document.getElementById("novo").onclick = function () {
  //herda da list
  minhasTarefas.add("Minha tarefa nova");
};

minhasTarefas.mostrarNome();

///////////////////// funções anonimas
// function adicionar(...numeros) {
//   let total = numeros.reduce((total, proximo) => {
//       let soma = total + proximo
//     return soma;
//   });
//   console.log(total);
// }

// adicionar(1, 2, 3, 4, 5);

// /////////////////////////////////////// Operacoes em array
// const lista = [1, 2, 3, 4, 5, 6];
// const novaLista = lista.map(function (item, index) {
//   return item + index;
// });
// console.log(lista);
// console.log(novaLista);

// //somar elementos
// const soma = lista.reduce(function (total, proximo) {
//   return total + proximo;
// });
// console.log("soma: ", soma);
// ///procurar na lista se existe o item
// const find = lista.find(function (item) {
//   return item == 6;
// });
// console.log(find);

////////////////////////////////////// rest operator
// function cadastrar(usuarios, ...novosusuarios){
//     let totalusuario = [
//         ...usuarios,
//         ...novosusuarios
//     ]
//     return console.log(totalusuario);
// }
// let usuarios = ["matheus", "joao"]
// let novosusuarios = cadastrar(usuarios, "henrique", "claudia")

// function minhaLista(...nomes) {
//   console.log(nomes);
// }
// minhaLista("Matheus", "Lucas", "João", "claudia");
// function minhaLista2(...numeros) {
//   console.log(numeros);
// }
// minhaLista2(1,2,3,4,6);

////////////////////////////////////// operator spread
// function cadastroPessoa(info) {
//   let novosDados = {
//     ...info,
//     cargo: "Programador",
//     status: 1,
//     codigo: "123456",
//   };
//   return novosDados;
// }

// console.log(
//   cadastroPessoa({ nome: "ana", sobrenome: "teste", anoInicio: 2045 })
// );

// let pessoa = {
//   nome: "ana",
//   idade: 30,
//   cargo: "Programador",
// };
// console.log(pessoa);
// let novapessoa = {
//   ...pessoa,
//   anoAtual: 2021,
//   cidade: "Campo Grande",
// };
// console.log(novapessoa);

// let primeiros = [1,2,3]
// console.log(primeiros);
// let numeros = [...primeiros, 4,5,6]
// console.log(numeros);
// let numeros2 = [primeiros, 4,5,6]
// console.log(numeros2);

///////////////////////////////////// descontruindo objetos e arrays
// const pessoa = {
//   nome: "joão",
//   sobrenome: "fraga",
//   idade: 20,
//   cargo: "desenvolvedor",
// };
// console.log(pessoa);
// let { nome } = pessoa;
// console.log(nome);
// let { sobrenome } = pessoa;
// console.log(sobrenome);
// let { idade, cargo } = pessoa;
// console.log(idade, cargo);
// // atribuir variavel com outro nome
// let { cargo: programador } = pessoa;
// console.log(programador);

// let nomes = ['Matheus', "Fraga", 10]
// let {1: segundonome} = nomes
// console.log(segundonome);

// let {0 : primeironome, 2: idadenova} = nomes
// console.log(primeironome, idadenova);

// let nomes2 = ["claudia", "maria", 10]
// let [nome2, sobrenome2, idade2] = nomes2
// console.log(nome2, sobrenome2, idade2);

// // Uso de variavel em strings

// let nome = "ana";
// let sobrenome = "clara";
// let idade = 50;
// let pessoa = "Meu nome é: " + nome + sobrenome + " e tenho " + idade;

// let pessoa2 = `Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos`
// console.log(pessoa2);

////////////////////////////////////////////////////
// // diferença entre var let const
// var nome = "joão";

// if(nome == "joão"){
//     var idade = 40
//     console.log("tem: ", idade);
// }
// // var acessa fora do escopo do if ou da função
// console.log(idade);

// var nome = "joão";

// if(nome == "joão"){
//     let sobrenome = "Fraga";
//     console.log("sobrenome: ", sobrenome);
// }
// // não acessa o sobrenome fora, let somente no espcopo
// // console.log(sobrenome);

// var lista = [1,2,3]
// for(var i in lista){
//     console.log(lista[i]);
// }
// console.log(i);
// for(let p in lista){
//     console.log(lista[p]);
// }
// // erro pois estano escopo do for
// // console.log(p);

// const nome = "Claudia"
// console.log(nome);
// nome = "asd"
// // erro pois é uma constante
// // console.log(nome);
