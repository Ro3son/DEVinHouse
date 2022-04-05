let x = 0;
let y = 0;
let move = null;
const personagem = document.querySelector("#personagem");

setInterval(() => {
  switch (move) {
    case "desce":
      personagem.style.top = ++x + "px";
      break;

    case "sobe":
      personagem.style.bottom = ++y + "px";
      break;

    case "direita":
      personagem.style.left = ++x + "px";
      break;

    case "esquerda":
      personagem.style.right = ++y + "px";
      break;
  }
}, 1);

function stop() {
  move = false;
}

window.addEventListener("keyup", (e) => {
  stop();
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
