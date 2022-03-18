const input = document.createElement("input");
input.type = "text";
input.id = "input";
input.style.border = "2px solid #000";
document.body.append(input);

const inputChange = document.getElementById("input");
inputChange.addEventListener("input", changeColor);

function changeColor() {
  if (input.value === "a") {
    document.body.style.backgroundColor = "yellow";
  } else if (input.value === "b") {
    document.body.style.backgroundColor = "black";
  } else if ("[enter]") {
    document.body.style.background = "";
    document.querySelector("input").style.padding = "";
  }
  if ("[space]") {
    document.querySelector("input").style = "padding: 20px; font-size: 22px";
  }
}
