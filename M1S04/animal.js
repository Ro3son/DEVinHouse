/*
[M1S4] Ex 13 - Use Classes e Herança (POO)

Crie a classe 'Animal' com os atributos 'nome', 'idade' e 'som',
em seguida crie as subclasses (de Animal) 'Cachorro' e 'Gato' com os atributos 'nome' e 'idade'.
Inicialize o atributo 'som' da superclasse com 'latido' e 'miado'.
Crie instâncias para cada subclasse.

*/
class Animal {
    constructor(nome, idade, som) {
        this.nome = nome;
        this.idade = idade;
        this.som = som;
    }
}
class Cachorro extends Animal {
    constructor(nome, idade) {
        super('Snoopy', 10, 'Latido');
    }
}
class Gato extends Animal {
    constructor(nome, idade) {
        super('Frajola', 8, 'Latido');

    }
}
const snoopy = new Cachorro();
console.log(snoopy);
const frajola = new Gato();
console.log(frajola);
