/*
[M1S4] Ex 11 - Use Classes e Objetos (POO)

Crie a classe 'Usuario' que tenha os atributos 'login' e 'senha'.
Adicione na classe o método 'autenticar', que recebe uma senha como parâmetro.
O método deve ter retorno boolean, retornando verdadeiro se a senha informada (no parâmetro) 
for igual a senha do usuário instanciado.

*/
class Usuario {
    constructor(login, senha) {
        this.login = login;
        this.senha = senha;
    }
    autenticar(password) {
        return password === this.senha;
    }
}

const user = new Usuario('admin', '123');
console.log(user.autenticar('123')); // true
console.log(user.autenticar('1234'));  // false