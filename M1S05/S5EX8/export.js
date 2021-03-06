export { movimentaDiv, eventKey };

function movimentaDiv(elemento, direcao, x, y) {
  switch (direcao) {
    case "desce":
      elemento.style.top = ++y + "px";
      if (y > window.innerHeight - 100) {
        y = window.innerHeight - 100;
      }
      break;
    case "sobe":
      elemento.style.top = --y + "px";
      if (y < 0) {
        y = 0;
      }
      break;
    case "direita":
      elemento.style.left = ++x + "px";
      if (x < 0) {
        x = 0;
      }
      break;
    case "esquerda":
      elemento.style.left = --x + "px";
      if (y > window.innerWidth - 100) {
        y = window.innerWidth - 100;
      }
      break;
  }
  return { x: x, y: y };
}
function eventKey(tecla) {
  if (tecla == "ArrowDown") {
    const icon = document.createElement("i");
    icon.style.color = "wheat";
    icon.setAttribute("class", "fa-solid fa-caret-down");
    document.querySelectorAll("i").forEach((i) => i.remove());
    document.getElementById("personagem").append(icon);
    return "desce";
  }

  if (tecla == "ArrowUp") {
    const icon = document.createElement("i");
    icon.setAttribute("class", "fa-solid fa-caret-up");
    icon.style.color = "lightblue";
    document.querySelectorAll("i").forEach((i) => i.remove());
    document.getElementById("personagem").append(icon);
    return "sobe";
  }

  if (tecla == "ArrowLeft") {
    const icon = document.createElement("i");
    icon.setAttribute("class", "fa-solid fa-caret-left");
    icon.style.color = "lightpink";
    document.querySelectorAll("i").forEach((i) => i.remove());
    document.getElementById("personagem").append(icon);
    return "esquerda";
  }

  if (tecla == "ArrowRight") {
    const icon = document.createElement("i");
    icon.setAttribute("class", "fa-solid fa-caret-right");
    icon.style.color = "lightgreen";
    document.querySelectorAll("i").forEach((i) => i.remove());
    document.getElementById("personagem").append(icon);
    return "direita";
  }
}
