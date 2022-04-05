function adicionarSomenteNumeros(...numbers){
    let sum = 0;
    
    for (let number of numbers ) {
        sum += number;
    }
    console.log(sum);
    return sum;
}
adicionarSomenteNumeros(1, 2, 3, 'string');
