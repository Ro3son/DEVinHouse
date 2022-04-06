const adicionarSomenteNumeros = (string, str, ...numbers) => {
    let sum = 0;
    
    for (let number of numbers ) {
        sum = sum + number;
    };
    return sum;
}
console.log(adicionarSomenteNumeros('Robson', 'Dev', 1, 2, 3)); // 6
