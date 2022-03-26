/*
[M1S4] Ex 1 - Use let, const e var

Implemente uma funcão 'calcular'
A funcão recebe como parâmetro um array númerico
identifique o maior e o menor valor do mesmo
Imprima os valores (maior e menor) ou a mensagem "Não é possível calcular"
Teste a função com as entradas:
    [56, 65, 64, -3, 23, 42, -15, 65, 14, 32, 78, 70, 47]
    []
    [1]
    [1, -1]
    null
    [-2,-2,-2,-2]
    [20,10, 30]
*/
let entrada = require('fs').readFileSync('stdin', 'utf8');

let valores = entrada.split(' ').map((item) => parseInt(item));

function calcular(arrNum) {

  let menor = 0;
  let maior = 0;

  for (let i = 0; i < valores.length; i++) {

    arrNum = valores[i];

    if (arrNum < menor) {
      menor = arrNum;
    }
    if (arrNum > maior) {
      maior = arrNum;
    }
    if (!arrNum || arrNum.length === 0) {
      console.log('Não é possível calcular');
      return;
    }
  }
  console.log(`O menor é: ${menor}`); // -15
  console.log(`O maior é: ${maior}`); // 78
}
calcular()

// Operador booleano !(NOT) retorna o valor inverso //
// Se não é um número não é posssível calcular //