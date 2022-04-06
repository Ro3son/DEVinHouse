function movimentaDiv(elemento, direcao, x, y) {
  switch (direcao) {
    case "desce":
      elemento.style.top = ++y + "px";
      break;
    case "sobe":
      elemento.style.top = --y + "px";
      break;
    case "direita":
      elemento.style.left = ++x + "px";
      break;
    case "esquerda":
      elemento.style.left = --x + "px";
      break;
  }
  return { x: x, y: y };
}
function eventKey(tecla) {
  if (tecla == "ArrowDown") {
    return "desce";
  }

  if (tecla == "ArrowUp") {
    return "sobe";
  }

  if (tecla == "ArrowLeft") {
    return "esquerda";
  }

  if (tecla == "ArrowRight") {
    return "direita";
  }
}
export { movimentaDiv, eventKey };
