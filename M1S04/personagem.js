/*
[M1S4] Ex 12 - Use Classes e Objetos (POO)

Jogo de ação: 

Crie uma classe 'Personagem'
com atributos 'nome' e 'percentualVida'.

O nome é indicado no construtor da classe
E o percentual de vida é iniciado com 100.

Crie o método 'sofreuDano(percentualDano)
Diminua o valor do parâmetro do percentual de vida (atributo percentualVida) do personagem
(até o limite de zero).

Crie outro método 'usouKitMedico()' que adiciona 10 pontos ao percentual de vida do persoangem (até o limite de 100)
*/

class Personagem {
    constructor() {
        this.nome = 'Mr. Shooter';
        this.percentualVida = 100;
    }
    sofreuDano(percentualDano) {
        let dano = (this.percentualVida - percentualDano < 0) ?
            this.percentualVida = 0 : this.percentualVida -= percentualDano;
    }
    usouKitMedico() {
        const percentualCura = 10;
        let cura = (this.percentualVida + percentualCura > 100) ?
            this.percentualVida = 100 : this.percentualVida += percentualCura;
    }
}
// teste da implementação //
const jogador = new Personagem();
console.log(jogador);
jogador.sofreuDano(30);
jogador.usouKitMedico();
console.log(jogador.percentualVida); // 80