const nomesFamiliares = ['Robson', 'Kamila', 'Iolanda', 'Cicero', 'Braulina'];

nomesFamiliares.forEach( function(element) {
    const li = document.createElement('li');
    li.setAttribute('value', element);
    li.innerText = element;
    document.querySelector('ul').append(li);
})

let selector = document.querySelector("#list");

const requestURL = `https://servicodados.ibge.gov.br/api/v2/censos/nomes/${selector.type}`;

fetch(requestURL)
.then( function(response) {
    return response.json();
})
.then( function(data) {

    const p = document.createElement('p');

    let censoNomes = data.nomes;

    console.log(censoNomes);
   
    if (selector.type == 'Robson') {
        p.innerText = `${censoNomes}`;
    }
    document.body.appendChild(p);
})

