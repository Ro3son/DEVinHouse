const nomesFamiliares = ['Robson'];

nomesFamiliares.forEach(function (element, index) {
    const li = document.createElement('li');
    li.value = index;
    li.innerText = element;
    document.querySelector('ul').append(li);
})

let selector = document.querySelector("#list");

const requestURL = `https://servicodados.ibge.gov.br/api/v2/censos/nomes/${selector.innerText}`;

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        let dataNomes = data;

        console.log(dataNomes);

        for (object of data) {
            const p = document.createElement('p');

            if (selector.innerText == 'Robson') {
                p.innerText = `Frequencia: ${object.res[0].frequencia}`;
            }
            document.querySelector('ul').append(p);
        }
    })

