/*
Para o array de nomes de tags html abaixo,faça as ações que se pede encadeando as funções de array:

const tags = ['html', 'head', 'body', 'div', 'h1', 'span'];

a) Gere um array somente com as tags iniciadas com a letra 'h' (filter), retirando as demais tags (não iniciadas com 'h');
Dica: palavra.startsWith('h') ==> retorna true se a palavra começa com 'h'

b) Para cada tag resultante, adicione os sinais de < e > na tag (map):
Exemplo: h4 vai ficar <h4>

c) Imprima no console a tag resultante (forEach).

*/
const tags = ['html', 'head', 'body', 'div', 'h1', 'span'];

const combinandoTags = tags.filter((tag) => tag.startsWith('h'))
    .map(function(tag) {
        return '<' + tag + '>';
    })
    .forEach(function(tag) {
        console.log(tag);
    });