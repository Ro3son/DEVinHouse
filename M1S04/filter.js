/*
[M1S4] Ex 6 - Use funções de arrays (filter)

re-escreva o trecho de código usando a função filter.
Gere um novo array somente com as notas dos aprovados (nota >= 7).

*/
const notas = [8.5, 7.5, 6, 3, 8.5, 10, 10, 9, 4, 7];

const aprovados = [];

// for(let i = 0; i < notas.length; i++) {
//     const n = notas[i];
//     if (n >= 7) {
//         aprovados.push(n);
//     }
// }
// console.log(aprovados);

// Usando filter //

notas.filter(function (nota) {
    if (nota >= 7) {
        return aprovados.push(nota)
    }
});
console.log(aprovados);

// Com return aprovados.push(nota >= 7); aprovados retornou object "true", "false"
// console.log returning object value instead number using filter method

