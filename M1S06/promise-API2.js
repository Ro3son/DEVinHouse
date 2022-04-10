/*
Quanto será que está a preço do Bitcoin hoje???
Vamos descobrir!
Obtenha os dados nessa API : https://api.coincap.io/v2/assets/bitcoin, imprima no console a frase:
'O preço do Bitcoin - <simbolo do bitcoin> em dólares hoje é $ <preço do bitcoin>`.
Dicas:
a) Repare que o retorno desta API encapsula os dados dentro de um objeto 'data'.
b) Use as propriedades 'symbol' e 'priceUsd' do retorno para preencher os valores na frase.
*/

// const requestURL = 'https://api.coincap.io/v2/assets/bitcoin';

// fetch(requestURL)
// .then((response) => {
//     return response.json();
// })
// .then((dados) => {
//     let objeto = dados;
//     console.log(`O preço do Bitcoin - ${objeto.data.symbol} em dólares hoje é ${parseFloat(objeto.data.priceUsd).toFixed(0)}.`);
// });

async function bitcoinPrice() {
    const requestURL = await fetch('https://api.coincap.io/v2/assets/bitcoin');
    const objeto = await requestURL.json();
    console.log(`O preço do Bitcoin - ${objeto.data.symbol} em dólares hoje é ${parseFloat(objeto.data.priceUsd).toFixed(0)}.`);
}
bitcoinPrice();