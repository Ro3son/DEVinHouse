/*
Re-escreva o trecho de código abaixo usando a função forEach() 
imprima os valores em letras maiúsculas.
*/
const nomes = ['kirk', 'spock', 'scott', 'mccoy', 'sulu'];

// for (let i = 0; i < nomes.length; i++) {
//     const nome = nomes[i].toUpperCase();
//     console.log(nome);
// }

//re-escrevando com forEach()//

nomes.forEach(function(nome) {
    const letrasMaiusculas = nome.toUpperCase();
    console.log(letrasMaiusculas);
})