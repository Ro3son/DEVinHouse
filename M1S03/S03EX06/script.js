const h1 = document.createElement("h1"),
  div = document.createElement("div");

h1.innerText = "Fotos de cachorros";
h1.setAttribute(
  "style",
  "text-align: center; font-family: sans-serif; font-size: 1.2em"
);
div.id = "containerDogs";
div.setAttribute(
  "style",
  "display: flex; justify-content: center; align-items: center; padding: 16px; height: 400px; gap: 0.8em"
);

document.body.append(div);
document.body.append(h1);

// URL da API //
const requestURL = "https://dog.ceo/api/breeds/image/random/10"; // Exibe 10 imagens //

const request = new Request(requestURL);

// Fecth() method para buscar dados da API //
fetch(request)
  .then((resp) => resp.json())
  .then(function (data) {
    let dogs = data.message;
    return dogs.map(function () {
      let img = document.createElement("img");
      img.setAttribute("style", "width: 100%; height: 120px; padding: 12px");
      img.src = data.message;
      document.getElementById("containerDogs").append(img);
    });
  })
  // Registro de erro em potencial //
  .catch(function (error) {
    console.log(error);
  });
// Tipo de solicitação: GET //
// Get 404 //
// Could not load the image //

// fetch(requestURL)
//   .then((resp) => resp.json())
//   .then(function (data) {
//     let breedsObj = data.message;
//     let breedsArr = Object.keys(breedsObj);
//     for (let i = 0; i < breedsArr.length; i++) {
//       let img = createNode("img");
//       img.style.width = '100px';
//       img.style.height = '100px';
//       img.src = data.message.images;
//       append(div, img);
//     }
//   })
