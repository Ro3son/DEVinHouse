/*
[M1S4] Ex 9 - Use funções de arrays combinadas (filter, reduce)

regra competição de tiro esportivo: cada competidor poderia efetuar 10 disparos.
Aqueles disparos cuja pontuação no alvo for menor ou igual a 5 são descartados na contagem final de pontos.

*/
/*
Usando funções de arrays combinadas, faça as seguintes operações:
a) Filtre ('filter') o array para manter os pontos que serão considerados, ou seja, aqueles maiores que 5;
b) Calcule o total de pontuação obtida ('reduce'), somando os pontos considerados
*/
const pontos = [10, 8, 5, 4, 9, 1, 9, 10, 2, 10]; // Cada elemento são os pontos obtidos em cada disparo por um competidor.

const resultado = pontos.filter( (ponto) => ponto > 5)
    .reduce(function(soma, atual) {
        return soma + atual;
    });
console.log(resultado);
