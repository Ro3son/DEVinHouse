/* Escreva uma função chamada 'adicionarSomenteNumeros' que recebe um número indefinido de parâmetros 
(incluindo strings e numbers) e retorna a soma dos parâmetros numérico.
Dica: Lembram do 'typeof()' ? */

const adicionarSomenteNumeros = (...numbers) => {
    let sum = 0;
    
    for (let number of numbers) {
        if (!isNaN(number)) {
            sum = sum + number;
        }
        
    };
    return sum;
}
console.log(adicionarSomenteNumeros('Robson', 'Dev', 1, 2, 3)); // 6
