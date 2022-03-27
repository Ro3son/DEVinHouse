/*
[M1S4] Ex 7 - Use funções de arrays (find)

Localize no array abaixo a primeira ocorrência de número maior que 50,
usando a função 'find'.
*/
const numeros = [0, 2, 88, 56, 33, 42, 67, 3, 9, 0, 2];

const resultado = [];

numeros.find(function(num) {
    if (num > 50) {
        return resultado.push(num);
    }
})
console.log(resultado);