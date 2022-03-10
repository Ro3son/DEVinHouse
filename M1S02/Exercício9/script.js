// Exercício9

var notas = [
  [10, 8.5, 5.5, 9.5], // row 0
  [8.5, 7, 7.5, 6], // row 1
  [8, 9, 10, 7.5], // row 2
  [9, 9.5, 10, 8], // row 3
];

// a) Imprima o valor da nota do primeiro elemento do terceiro array de notas;
console.log(notas[2][0]); // 8
// b) Imprima o valor da nota do segundo elemento do quarto array de notas
console.log(notas[3][1]); // 9.5
// c) Imprima o valor da soma das quatro primeiras notas de cada array
var somaRow0 = notas[0][0] + notas[0][1] + notas[0][2] + notas[0][3],
  somaRow1 = notas[1][0] + notas[1][1] + notas[1][2] + notas[1][3],
  somaRow2 = notas[2][0] + notas[2][1] + notas[2][2] + notas[2][3],
  somaRow3 = notas[3][0] + notas[3][1] + notas[3][2] + notas[3][3];
console.log(somaRow0, somaRow1, somaRow2, somaRow3); // 33.5, 29, 34.5, 36.5

// somar as notas dos "primeiros elementos" de cada array interno.

var somaNotasPrimeirosElementos =
  notas[0][0] + notas[1][0] + notas[2][0] + notas[3][0];
console.log(somaNotasPrimeirosElementos); // 35.5