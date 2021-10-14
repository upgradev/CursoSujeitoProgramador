// 1 criar balao
// 2 estourar balao
// 3 carregar balao

var total = 0;

function criarBalao() {
  var balao = document.createElement("div");
  balao.setAttribute("class", "balao");

  // eixo
  var x = Math.floor(Math.random() * 600);
  var y = Math.floor(Math.random() * 400);

  balao.setAttribute("style", "left:" + x + "px;top: " + y + "px;");
  balao.setAttribute("onclick", "estourar(this)");

  //mostrar na tela
  document.body.appendChild(balao);
}

function estourar(objeto) {
  document.body.removeChild(objeto);

  total++;
  var score = document.getElementById("total");
  score.innerHTML = "Balões estourados: " + total;
}

function carregarJogo() {
  setInterval(criarBalao, 1000);
}

// function opcaoSelecionada(objeto){
//   console.log("cidade selecionada: " + objeto.value);
// }

// function desfocado(){
//   console.log("desfocou do campo");
// }

// function focado(){
//   console.log("campo focado");
// }

// function carregou(){
//   console.log("pagina foi carregada");
// }

// function apertouOTeclado(event){
//   console.log("apertou uma tecla");
// }
// function soltouOTeclado(event) {
//   console.log("soltou o teclado");
// }

// function tecladoApertado(event) {
//   // console.log("teclado apertado " + event.keyCode);
//   // console.log("teclado apertado " + event.shiftKey);
//   console.log("teclado apertado " + event.ctrlKey);
//   // if(event.keyCode == 13){
//   //   console.log("voce apertou o enter");
//   // }
// }

// function apertoumouse() {
//   console.log("O mouse foi apertado");
// }

// // mouse up
// function solteioOMouse() {
//   console.log("Soltei o botao do mouse");
// }

// // mouseover
// function passouOMouse() {
//   console.log("Passei o mouse no botão");
// }

// //mouseout
// function tirouOMouse() {
//   console.log("Tirou o mouse");
// }

// // mousemove
// function movendoOMouse(){
//   console.log("movendo o mouse no botao");
// }

// // onclick
// function onClick(){
//   console.log("voce clicou no botão");
// }

// // oncontextmenu
// function botaoDireito(){
//   console.log("botão direito do mouse");
//   return false;
// }
