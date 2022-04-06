export function movimenta (elemento, direcao, x, y) {
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
  return {x:x, y:y};
}
