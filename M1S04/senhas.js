/*
[M1S4] Ex 5 - Use funções de arrays (map)

Uma das regras de senhas aceitas por um sistema é ter no mínimo 4 caracteres e no máximo 10 caracteres.
Para o array de amostragem de senhas abaixo, retorne outro array indicando quais elementos passariam nesta validação, 
retornando 'true' ou 'false' para cada elemento da lista.
Imprima o array resultante no console para conferência.

regra de senhas:

mín = 4 caracteres
máx = 10 caracteres

retorne 'true' ou 'false' para os elementos que passam na regra de senhas.

Imprima o resultado.

Percorra o elemento da array pelo seu index e veja seu comprimento.
*/
const senhas = ['abc123', 'super-secreta', '42', 'senha', '007'];

senhas.map(function(elemento) {
    // Conditional operator "?" //
    let resultado = (elemento.length >= 4 && elemento.length <= 10) ? 'true' : 'false';
    console.log(resultado);
    
    // if (elemento.length >= 4 && elemento.length <= 10) {
    //     console.log('true');
    // } else {
    //     console.log('false');
    // }
})