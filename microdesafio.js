// Aula 05 - Microdesafio
//Exercicio "Lista de compras"

let listaDeCompras = ["Cerveja", "Pipoca", "Arroz", "Milho", "Tomate"];
console.log("Exemplo de array para uma lista de compras:")
console.log(listaDeCompras);

console.log("Métodos para trabalhar com array:")
console.log("O método Join junta os elementos de um array usando um separador que especificamos. Por exemplo:");
let separadosPorPonto = listaDeCompras.join(" . ");
console.log(separadosPorPonto);

console.log("O método Pop elimina o último elemento de um array e retorna o elemento eliminado. Veja a seguir:");
let ultimoItemDaLista = listaDeCompras.pop();
console.log(listaDeCompras);
console.log(ultimoItemDaLista);

console.log("O método Push adiciona um ou mais elementos ao final do array e retorna o novo comprimento do array. Observe:");
listaDeCompras.push("Vinho", "Fruta");
console.log(listaDeCompras);

console.log("O método Shift elimina o primeiro elemento de um array e retorna o elemento eliminado. Veja a seguir:");
let primeiroItemDaLista = listaDeCompras.shift();
console.log(listaDeCompras);
console.log(primeiroItemDaLista);

console.log("O método Unshift adiciona um ou mais elementos ao início de um array e retorna o novo comprimento do array. Veja a seguir:");
listaDeCompras.unshift("Café", "Mais um pouco de café")
console.log(listaDeCompras);