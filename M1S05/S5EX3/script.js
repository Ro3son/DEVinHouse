const input = document.createElement('input');
input.type = 'text';
input.setAttribute('style', 'display: flex; margin-right: auto; margin-left: auto; padding: 12px');
document.body.appendChild(input);

const requestURL = 'https://servicodados.ibge.gov.br/api/v1/censos/nomes/ranking?qtd=100000';

fetch(requestURL)
.then(function(response) {
    return response.json();
})
.then(function(dados) {

    let armazenaNomes = dados;

    console.log(armazenaNomes);

    let input = document.querySelector('input');
    input.addEventListener('keypress', listaNomes);

    function listaNomes() {
        const nomes = armazenaNomes.filter(function(nome) {
           
        });
        console.log(nomes);
    }
});