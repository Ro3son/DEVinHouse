// URL da API //
const requestURL = 'https://dog.ceo/api/breeds/image/random/1';

// Fecth()method para buscar dados da API //
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    let arr = response.message;
    for (let i = 0; i < arr.length; i++) {
      const img = document.createElement('img');
      img.src = response.message;
      img.setAttribute('style', 'width: 50%; height: 400px');
      document.getElementById("containerDogs").appendChild(img);
    }
  });
// Tipo de solicitação: GET //
// Get 404 //
// Could not load the image //
