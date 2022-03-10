// Exercício10
/*
Débito: valores negativos
Crédito: valores positivos
*/
var extrato = [100, -35, -15, -5, 55, -20];

// a) Percorra o array (operador 'for') e imprima cada elemento do array na ordem;

// for (let i = 0; i < 1; i++) {
//     var ordem = extrato;
//     ordem.sort((a, b) => (b - a ? 1 : -1));
//     console.log(`${ordem[0] + "\n" + ordem[1] + "\n" + ordem[2] +
//         "\n" + ordem[3] + "\n" + ordem[4] + "\n" + ordem[5]}`); // 100, -35, -15, -5, 55, -20
// }

// b) Percorra o array (operador 'for') e imprima os elementos na ordem inversa (de trás pra frente);

// for (let i = 0; i < 1; i++) {
//     var ordemInversa = extrato;
//     ordemInversa.reverse();
//     console.log(`${ordemInversa[0] + "\n" + ordemInversa[1] + "\n" + ordemInversa[2] +
//         "\n" + ordemInversa[3] + "\n" + ordemInversa[4] + "\n" + ordemInversa[5]}`); // -20, 55, -5, -15, -35, 100
// }

/* c) Percorra o array (operador 'for') e calcule o saldo final da conta (valor inicial era zero),
e imprima o resultado no console.
(* Dica: crie uma variável 'saldo' inicializada com zero e vá atualizando seu valor);*/

// d) Imprima no console a mensagem 'saldo positivo' ou 'saldo negativo', dependendo do resultado do saldo final calculado.
