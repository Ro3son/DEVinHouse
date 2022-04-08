/* Escreva uma função chamada 'adicionarPrimeiro' que recebe como parâmetro um array e 
retorna outro array com a string 'primeiro' seguido dos demais elementos do array passado por parâmetro.
 */
let arr = [1, 2, 3, 4];
let arr1 = ['primeiro'];

function adicionarPrimeiro() {
   return [arr1, ...arr];
}
console.log(adicionarPrimeiro(arr1));
