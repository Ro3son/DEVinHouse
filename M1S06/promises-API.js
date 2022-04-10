/* Existe uma API pública que retorna a idade média das pessoas que possuem o nome passado como parâmetro.
Para o cálculo, é usada uma base de dados interna deles, que pode ser subdividida pelo país passado também como parâmetro.

Faça uma chamada para esta API e descubra a idade média das pessoas com seu nome aqui no Brasil, conforme exemplo abaixo.
Imprima no console o nome e idade média retornados.A idade está representada na propriedade 'age' do retorno da API:

https://api.agify.io/?country_id=BR&name=tiago

Obs.: Se seu nome não constar na base deles (age == null), usar outro nome para os testes.
*/

const requestURL = 'https://api.agify.io/?country_id=BR&name=Robson';

fetch(requestURL)
.then((response) => {
    return response.json();
})
.then((dados) => {
    let objeto = dados;
    console.log(`Nome: ${objeto.name}, Idade Média: ${objeto.age} anos.`);
});

// async function namesAPI() {
//    const requestURL = await fetch('https://api.agify.io/?country_id=BR&name=Robson');
// console.log(requestURL);
//    const response = await requestURL.json();
// console.log(response);
//     console.log(`Nome: ${response.name}, Idade Média: ${response.age} anos.`);
//  }
//  namesAPI();
