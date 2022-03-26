/* [M1S4] Ex 2 - Use funções de arrays (forEach) 

A cada múltiplo de 3 da sequência de 0 a 30 use forEach para iterar
sobre os elementos e a cada múltiplo de 3 imprimir a palavra "PIN".

Um múltiplo é um número cujo resto da divisão é zero.
Ex 16 é múltiplo de 4 porque 16 % 4 == 0;

*/

const sequencia = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

sequencia.forEach(function (num) {
    if (num % 3 == 0) {
        console.log('PIN');
    } else {
        console.log(num);
    }
});