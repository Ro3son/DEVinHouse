//Exercício6

/*
Calcular o volume do cilindro
V = pi * r**2 * h, sendo
pi igual a 3.14, raio 3cm, altura 7cm
*/

var pi = 3.14,
    raio = 3,
    altura = 7;
var volumeCilindro = (pi * Math.pow(raio, 2) * altura);
console.log(volumeCilindro.toFixed(2)); //197.82
