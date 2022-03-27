/* [M1S4] Ex 8 - Use funções de arrays (every)

Use a função 'every' para identificar se todos os alunos foram aprovados no curso, 
sabendo que a nota mínima para aprovação é 7 (inclusive).
Imprima o resultado no console.

*/
const notas = [10, 9, 10, 7, 6, 8, 9, 10, 7, 9];

const resultado = [];

notas.every(function(nota) {
    return resultado.push(nota >= 7);
});
console.log(resultado);