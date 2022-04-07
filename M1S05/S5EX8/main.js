import { movimentaDiv, eventKey } from "./export.js";

//Variáveis//
let x = 0, y = 0, move = null;

//LocalStorage //
const salvaPosicaoLocalStorage = () => {
  localStorage.setItem("coordenadas", JSON.stringify({ x: x, y: y }));
};

const getLocalStorageCoordenadas = localStorage.getItem("coordenadas");
if (getLocalStorageCoordenadas != null) {
  const obj = JSON.parse(getLocalStorageCoordenadas);
  x = obj.x;
  y = obj.y;
};

const personagem = document.querySelector("#personagem");
personagem.style.top = y + "px";
personagem.style.left = x + "px";

setInterval(() => {
  let obj = movimentaDiv(personagem, move, x, y);
  x = obj.x;
  y = obj.y;

}, 1);

const stop = () => {
  move = false;
};

window.addEventListener("keyup", (e) => {
  stop();
  salvaPosicaoLocalStorage();
});

window.addEventListener("keydown", (e) => {
  move = eventKey(e.key);
});