/* Existe a API 'Random User Generator', que gera usuários fakes para fins de testes e protótipos.
Vamos usá-la para praticar consumir APIs com promises.

A URL da API é esta abaixo, onde o argumento 'results' representa a quantidade de resultados que queremos retornar:
https://randomuser.me/api/?results=4

Verifique a documentação e exemplo de retorno em: https://randomuser.me/documentation#howto
, ou faça uma chamada para a API (no navegador ou console) para verificar um exemplo de resultado.

Com base no json de retorno, monte uma página web com layout semelhante ao anexo, contendo dados de usuários de sistema com
foto, título, nome, sobrenome, e-mail e endereço completo.
O layout (css) é livre, desde que apresente as informações solicitadas.

Dicas:
a) Perceba que os resultados ficam dentro do campo 'results' do json de retorno;
b) Para a foto, use a versão grande do campo 'picture': 'large' (grande);
c) Para o nome, use os campos de 'name': 'title' (título), 'first' (nome), 'last' (sobrenome);
d) Para o endereço, use os campos de 'location': 'street' (rua), 'city' (cidade), 'state' (estado), 'country' (país);
e) Está anexado também uma sugestão de estruturação de página HTML para exibição, mas não é obrigatório seguir este exemplo.
f) Como é uma chamada remota para o serviço, o resultado pode demorar alguns segundos para retornar.
*/

document.body.style.backgroundColor = '#030303';
const h1 = document.createElement('h1');
h1.innerText = 'Random User Generator';
h1.style.textAlign = 'center';
h1.style.color = 'white';
document.body.append(h1);

const div = document.createElement('div');
div.id = 'users';
document.body.append(div);

async function randomUserGenerator() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=6');
        const dados = await response.json();

        let objetos = dados.results;

        console.log(objetos);

        let newImage;

        for (let i = 0; i < objetos.length; i++) {
            newImage = document.createElement('img');
            newImage.id = 'imgs';
            newImage.src = dados.results[i].picture.large;
            newImage.setAttribute('style', 'display: flex; flex-direction: column; padding: 12px; background-color: #19191a');
            document.getElementById("users").appendChild(newImage);
        }
    } catch (error) {
        console.log(error);
    }
}
randomUserGenerator();
