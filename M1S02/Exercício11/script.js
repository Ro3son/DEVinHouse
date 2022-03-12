//Exercício11
var sorteados = [
    [1, 44, 6, 2, 45, 60],     // linha 0
    [10, 21, 55, 25, 34, 44],  // linha 1
    [8, 18, 28, 29, 55, 59],   // linha 2
    [60, 25, 11, 34, 6, 9],    // linha 3
    [55, 43, 25, 12, 7, 11]    // linha 4
];
var count = 0;
for (var i = 0; i < sorteados.length; i++) { // percorre as linhas de 0 a 4
    var num = sorteados[i]; // armazena os arrays internos
    for (var j = 0; j < num.length; j++) {
        if ( num[j] === 25) {   // percorre cada elemento das arrays
            count++;
        }
    }
}
console.log('Número da sorte sorteado foi ' + count);

