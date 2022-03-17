// Create Divs //
const div1 = document.createElement("div"),
    div2 = document.createElement("div"),
    div3 = document.createElement("div");

div1.id = "galeria";
div1.setAttribute("style", "padding: 16px; height: 350px");
div2.id = "vídeo";
div3.id = "perfil";

document.body.append(div1);
document.body.append(div2);
document.body.append(div3);

//Galeria de imagens//
function createImg() {
    const h1 = document.createElement("h1"); // <h1>
    h1.innerText = "Minha Galeria de Bicicletas";
    h1.style.fontSize = "0.6em";
    h1.style.textAlign = "center";

    div1Div2 = document.createElement("div"); // <div> contianer
    div1Div2.id = "container";
    div1Div2.setAttribute(
        "style",
        "display: flex; justify-content: center; align-items: center; gap: 0.1em; padding: 16px; height: 250px;"
    );

    document.getElementById("galeria").append(h1);
    document.getElementById("galeria").append(div1Div2);

    var arr = [];
    arr.push("images/daniel-salcius-RRcYcdGY630-unsplash.jpg");
    arr.push("images/howard-bouchevereau-BRDO4C-0h_s-unsplash.jpg");
    arr.push("images/jacek-dylag-giFeTshEYYQ-unsplash.jpg");
    arr.push("images/josh-nuttall-eTrHMJwI5ro-unsplash.jpg");
    arr.push("images/mikkel-bech-yjAFnkLtKY0-unsplash.jpg");
    arr.push("images/rizki-yulian-ZBM9h6Es6IA-unsplash.jpg");

    for (let i = 0; arr.length > i; i++) {
        var img = new Image(200, 200);
        img.src = arr[i];
        img.style.width = "100%";
        img.style.padding = "5px";
        const src = document.getElementById("container");
        src.appendChild(img);
    }
}
