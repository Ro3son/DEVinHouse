import { movimenta } from "./module/script.js";

let x = 200;
let y = 200;

const getLocalStorageCoordenadas = localStorage.getItem("coordenadas");
if (getLocalStorageCoordenadas != null) {
  const obj = JSON.parse(getLocalStorageCoordenadas);
  x = obj.x;
  y = obj.y;
}

let move = null;

const personagem = document.querySelector("#personagem");

personagem.style.top = y + "px";
personagem.style.left = x + "px";

setInterval(() => {
  movimenta(personagem, move);
}, 1);

const salvaPosicaoLocalStorage = () => {
  localStorage.setItem("coordenadas", JSON.stringify({ x: x, y: y }));
};

function stop() {
  move = false;
}

window.addEventListener("keyup", (e) => {
  stop();
  salvaPosicaoLocalStorage();
});

window.addEventListener("keydown", (e) => {
  if (e.key == "ArrowDown") {
    move = "desce";
  }

  if (e.key == "ArrowUp") {
    move = "sobe";
  }

  if (e.key == "ArrowLeft") {
    move = "esquerda";
  }

  if (e.key == "ArrowRight") {
    move = "direita";
  }
});
