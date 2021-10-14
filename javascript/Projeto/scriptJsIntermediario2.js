function validar() {
  var valor = document.getElementById("numero").value;
  var nomeValor = document.getElementById("nome").value;
  if (valor.length > 2) {
    alert("Digite dois números ou menos");
    document.formulario.numero.focus();
    return false;
  } else if (nomeValor.length < 3) {
    alert("Nome maior que 3");
    return false;
  } else {
    alert("Formulario enviado");
    return true;
  }
}

// var data = new Date();
// console.log(data);
// console.log(data.getHours());
// console.log(data.getMinutes());

// var data = new Date(Date.parse("March 10, 2018"));
// console.log(Date.parse("March 10, 2018"));
// console.log(data);

// console.log(data.getDate());
// console.log(data.getDay());
// console.log(data.getFullYear());
// console.log(data.getDate() + "/" + data.getMonth() + "/" + data.getFullYear());
// console.log(
//   data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear()
// );

// var dias = [
//   "Domingo",
//   "Segunda",
//   "Terça",
//   "Quarta",
//   "Quinta",
//   "Sexta",
//   "Sabado",
// ];
// console.log(dias);
// console.log(dias[data.getDay()]);
// console.log(data.setDate(data.getDate() + 60));
// console.log(data);
// console.log(data.setHours(data.getHours() + 20));
// console.log(data);
