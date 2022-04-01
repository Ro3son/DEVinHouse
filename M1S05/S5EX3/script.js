document.body.style.fontFamily = 'courier';

const div = document.createElement('div'),
    h1 = document.createElement('h1'),
    input = document.createElement('input');

div.id = 'container';
div.setAttribute('style', 'display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 1em; height: 140px; padding: 16px; margin: auto')

h1.innerText = 'Digite um nome: ';

input.type = 'text';
input.placeholder = 'Buscar nome..'
input.setAttribute('style', 'width: 200px; padding: 8px; font-size: 1em;');

document.body.appendChild(div);
document.querySelector('div').append(h1);
document.querySelector('div').append(input);

const requestURL = 'https://servicodados.ibge.gov.br/api/v1/censos/nomes/ranking?qtd=20';

fetch(requestURL)
    .then((response) => {
        return response.json();
    })
    .then((dados) => {

        let armazenaNomes = dados;

        const div1 = document.createElement('div'),
            div2 = document.createElement('div'),
            h2 = document.createElement('h2'),
            ul = document.createElement('ul');

        div1.id = 'flex-container';

        div2.id = 'container-nomes';

        h2.innerText = 'Resultado: ';

        document.querySelector('body').append(div1);
        document.getElementById('flex-container').append(div2);
        document.getElementById('container-nomes').append(h2);
        document.getElementById('container-nomes').append(ul);

        for (objeto of armazenaNomes) {
            const li = document.createElement('li');
            li.innerText = `${objeto.nome}
            Rank: ${objeto.rank}
            Frequência: ${objeto.freq}`;
            document.querySelector('ul').append(li);
        };

        let input = querySelector('input');
        input.addEventListener('keypress', buscaNome);

        function buscaNome(event) {
          
        }
    });