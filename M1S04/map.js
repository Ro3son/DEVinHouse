/*
[M1S4] Ex 4 - Use funções de arrays Map

Re-escreva o trecho de código abaixo usando a função map
O resultado é uma novo array com o triplo do valor de cada elemento.

*/

const arr = [1,2,3,4];

const resultado = [];

// for (let i = 0; i < arr.length; i++) {
//     resultado.push(arr[i] * 3 );
// }
// console.log(resultado);

arr.map(function(num) {
    return resultado.push(num * 3);
})
console.log(resultado);

// map transforma e reorganiza uma array //
