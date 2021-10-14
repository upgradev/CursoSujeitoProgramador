// switch

document.write("<br > escolha seu pedido: <br />");
document.write("<br > 0 = Sorvete/ 1 - suco <br />");
document.write("<br > 2 - coca cola / 3 - Agua gelada <br /><br />");

function pedir() {
  x = prompt("O que deseja pedir? ");

  switch (x) {
    case "0":
      alert("Sorvete");
      break;
    case "1":
      alert("suco");
      break;
    case "2":
      alert("coca gelada");
      break;
    case "3":
      alert("agua gelada");
      break;
    default:
      alert("Ops não temos essa opção");
      break;
  }
}

// while
// x = 0;

// while (x < 10) {
//   document.write("<br /> O valor do x é: " + x);
//   x++;
// }
// x = 5;
// document.write("<br /><br /><br /> o x esta valendo: " + x + "<br /><br />");

// // for
// for (a = 0; a < x; a++) {
//   document.write("<br /> O valor do a é: " + a);
// }

// var lista = ["cleison", "claudia", "regina", "joão", 15];
// console.log(lista);
// console.log(lista.length);
// console.log(lista[1]);
// console.log(lista[4]);
// console.log(lista[2]);

// // encontrar na lista
// console.log("na lista: ", lista.indexOf("regina"));
// console.log("não esta na lista: ", lista.indexOf("ana"));

// console.log(lista.join(","));
// console.log("remove da lista: ", lista.pop());
// console.log(lista);
// console.log("remover primeiro da lista: ", lista.shift());
// console.log(lista);
// console.log("receber na posicao: ", lista[0] = "ana");
// console.log(lista);
// console.log("add na lista: ", lista.push("cleison"));
// console.log(lista);

// if(lista.indexOf("ana") > -1){
//     console.log("esse nome esta na lista: ", lista.indexOf("ana"));
// }
// else{
//     console.log("não encontrado: ", lista.indexOf("ana"));
// }
// if(lista.indexOf("anaaa") > -1){
//     console.log("esse nome esta na lista: ", lista.indexOf("anaaa"));
// }
// else{
//     console.log("não encontrado: ", lista.indexOf("anaaa"));
// }

// // funcao entrar
// function entrar() {
//   var area = document.getElementById("area");
//   var texto = prompt("Digite seu nome: ");

//   if (texto == "" || texto == null) {
//     alert("Digite seu nome novamente!");
//     area.innerHTML = "Bem vindo... ";
//   } else {
//     //   substitui o conteudo do id area
//     area.innerHTML = "Bem vindo... " + texto;
//   }
// }

// function entrar2(nome) {
//   var area = document.getElementById("area2");
//   var texto = prompt("Digite seu sobrenome: ");

//   area.innerHTML = nome + " " + texto;
// }

// este é meu nome
// var nome = "Claudia";

// document.write("<h1>Aprendendo js</h1>");
// document.write("<strong>Aprendendo js</strong>");
