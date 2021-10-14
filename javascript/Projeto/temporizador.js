function acao() {
  document.write("Executando.... <br />");
}

//executa de tempo em tempo
// setInterval(acao, 1000);

//para de executar em algum momento
var timer = setInterval(acao, 1000);
clearInterval(timer);

// executa apenas uma vez
//setTimeout(acao, 3000);
