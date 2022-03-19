const input = document.createElement("input");
input.type = "text";
input.id = "input";
input.style.border = "2px solid #000";
document.body.append(input);

function changeColor(event) {
  if (event.key == "a") {
    document.body.style.backgroundColor = "yellow";
  } else if (event.key == "p") {
    document.body.style.backgroundColor = "black";
  } else if (event.key == " ") { // space
    input.style.padding = "20px";
    input.style.fontSize = "22px";
  } else if (event.key == "Enter") {
    document.body.style.backgroundColor = "";
    input.style.removeProperty('padding');
    input.style.removeProperty('font-size');
  }
}
const inputChange = document.getElementById("input");
inputChange.addEventListener("keypress", changeColor);
