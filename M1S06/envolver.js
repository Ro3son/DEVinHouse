/*
Escreva uma função chamada 'envolver' que recebe uma quantidade indefinida de tags html (no formato string)
como parâmetros, e retorne outro array cujo primeiro elemento é '<html>', seguido das tags recebidas como parâmetro e como último elemento '</html>'.

Exemplo de entrada:
const r = envolver('<body>','<div>','<h1>','</h1>','</div>','</body>');
console.log(r); 
// saida esperada: ['<html>', '<body>','<div>','<h1>','</h1>',
*/

const arrayElemento = ['<html>'];

const envolver = (...tags) => {
  return [ arrayElemento, ...tags, arrayElemento ];
}
envolver(tags);