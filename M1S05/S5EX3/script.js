document.body.style.fontFamily = 'monospace';

const div = document.createElement('div'),
    h1 = document.createElement('h1'),
    input = document.createElement('input');

div.id = 'container';
div.setAttribute('style', 'display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 1em; height: 140px; padding: 16px; margin: auto')

h1.innerText = 'Digite um nome: ';

input.type = 'text';
input.setAttribute('style', 'width: 200px; padding: 8px; font-size: 1em');

document.body.appendChild(div);
document.querySelector('div').append(h1);
document.querySelector('div').append(input);

const requestURL = 'https://servicodados.ibge.gov.br/api/v1/censos/nomes/ranking?qtd=10';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (dados) {

        let armazenaNomes = dados;

        const table = document.createElement('table'),
            tr = document.createElement('tr'),
            th1 = document.createElement('th'),
            th2 = document.createElement('th'),
            th3 = document.createElement('th');

        table.style.border = '1px solid #000';

        tr.style.border = '1px solid #000';

        th1.innerText = 'Nome';
        th1.style.border = '1px solid #000';

        th2.innerText = 'Rank';
        th2.style.border = '1px solid #000';

        th3.innerText = 'Frequência';
        th3.style.border = '1px solid #000';

        document.body.append(table);
        document.querySelector('table').append(tr);
        document.querySelector('tr').append(th1);
        document.querySelector('tr').append(th2);
        document.querySelector('tr').append(th3);

        for (objeto of armazenaNomes) {
            const tr2  = document.createElement('tr');
            tr2.id = 'tr2';
            tr2.style.border = '1px solid #000';
            
            const td = document.createElement('td');
            td.style.border = '1px solid #000';
            td.innerText = objeto.nome;

            document.querySelector('table').append(tr2);
            document.getElementById('tr2').append(td);

        }
    });