let listaProduto = ["Computador", "Telefone", "Mouse", "Teclado"];
console.log(listaProduto);
console.log(`Tamanho da lista é ${listaProduto.length}`);
listaProduto.splice(listaProduto.indexOf("Mouse"), 1);
console.log(listaProduto);
let produto = listaProduto.indexOf("Telefone");
if (produto > -1) {
  console.log("esta na lista");
} else {
  console.log("não encontrado: ", produto);
}
listaProduto.splice(1, 1);
console.log("lista: " + listaProduto);
