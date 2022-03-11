// Exercício10
/*
Débito: valores negativos
Crédito: valores positivos
*/

var extrato = [100, -35, -15, -5, 55, -20];

// a) Percorra o array (operador 'for') e imprima cada elemento do array na ordem;

for (var i = 0; i < extrato.length; i++) {// índices: 0 1 2 3 4 5
  console.log(extrato[i]); // 100, -35, -15, -5, 55, -20
}

// b) Percorra o array (operador 'for') e imprima os elementos na ordem inversa (de trás pra frente);
for (var i = 0; i < 1; i++) {
  var ordemInversa = extrato;
  ordemInversa.reverse();
  console.log(ordemInversa); // -20, 55, -5, -15, -35, 100
}

/* c) Percorra o array (operador 'for') e calcule o saldo final da conta (valor inicial era zero),
e imprima o resultado no console. (* Dica: crie uma variável 'saldo' inicializada com zero e vá atualizando seu valor);*/
var saldo = 0; // saldo inicial
saldo = 100; // saldo disponível

var arr = [];

for (var i = 0; i < extrato.length; i++) {
  var x = extrato[i];

  if (x < 0) {
    arr.length++;
  }
}
console.log(arr.length); // 4 números negativos

// d) Imprima no console a mensagem 'saldo positivo' ou 'saldo negativo', dependendo do resultado do saldo final calculado.
