//Exercício7

/*
Calcule a quantidade de pontos e de jogos do time Tabajara F.C
Sendo que: 
Vitória = 3 pontos
Derrota = 0 pontos
Empate = 1 ponto

O time Tabajara F.C tem:
12 vitórias
2 derrotas 
6 empates

*/
var vitoria = 3,
    derrota = 0,
    empate = 1;
var tabajaraVitorias = 12,
    tabajaraDerrotas = 2,
    tabajaraEmpates = 6;
var numPontos = ((tabajaraVitorias * vitoria) + (tabajaraDerrotas * derrota) + (tabajaraEmpates * empate)); // 42 pontos
var numPartidas = ((tabajaraVitorias) + (tabajaraDerrotas) + (tabajaraEmpates)); // 20 partidas
console.log("O time Tabajara F.C acumulou " + numPontos + " pontos após jogar " + numPartidas + " partidas.");
