// Exercício10

var extrato = [100, -35, -15, -5, 55, -20];

// a) Percorra o array (operador 'for') e imprima cada elemento do array na ordem;

for (var i = 0; i < extrato.length; i++) {
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

var saldo = 0;

extrato.sort((a, b) => b - a); // [ 100, 55, -5, -15, -20, -35 ]

for (var i = 0; i < extrato.length; i++) {
  
  if (extrato[i] < 0) {
    var credito = extrato.slice(0, 2); // [100, 55]
    var somaCredito = (credito[0] + credito[1]); // 155

    var debito = extrato.slice(2, 6); // [ -5, -15, -20, -35 ]
    var somaDebito = (debito[0] + debito[1] + debito[2] + debito[3]); // -75

    var resultadoSaldo = (somaCredito + somaDebito); // 80 reais
// d) Imprima no console a mensagem 'saldo positivo' ou 'saldo negativo', dependendo do resultado do saldo final calculado.
    var resultadoSaldoFinal = resultadoSaldo > 0 ? "saldo positivo" : "saldo negativo";
  }
}
console.log(`Saldo Final: ${resultadoSaldo} reais. 
${resultadoSaldoFinal}`);

//Solution II//
var saldo2 = 0;

extrato.sort((a, b) => b - a); // [ 100, 55, -5, -15, -20, -35 ]
for (var i = 0; i < extrato.length; i++) {
  saldo2 = saldo2 + extrato[i]; // 100 + 55 - 5 - 15 - 20 - 35 = 80 
}
console.log(saldo2);