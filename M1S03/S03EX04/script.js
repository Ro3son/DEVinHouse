// Create Divs //
const div1 = document.createElement("div"),
  div2 = document.createElement("div"),
  div3 = document.createElement("div");

div1.id = "galeria";
div1.setAttribute("style", "padding: 16px; height: 350px");
div2.id = "video";
div2.setAttribute("style", "padding: 16px; height: 350px");
div3.id = "perfil";

document.body.append(div1);
document.body.append(div2);
document.body.append(div3);

const eventClick = document.getElementById("clickGaleria");
eventClick.addEventListener("click", hideImg);

//Galeria//
function hideImg() {
  document.body.style.backgroundColor = "whitesmoke";

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

  let arr = [];
  arr.push("images/daniel-salcius-RRcYcdGY630-unsplash.jpg");
  arr.push("images/howard-bouchevereau-BRDO4C-0h_s-unsplash.jpg");
  arr.push("images/jacek-dylag-giFeTshEYYQ-unsplash.jpg");
  arr.push("images/josh-nuttall-eTrHMJwI5ro-unsplash.jpg");
  arr.push("images/mikkel-bech-yjAFnkLtKY0-unsplash.jpg");
  arr.push("images/rizki-yulian-ZBM9h6Es6IA-unsplash.jpg");

  for (let i = 0; arr.length > i; i++) {
    let img = new Image(200, 200);
    img.src = arr[i];
    img.style.width = "100%";
    img.style.padding = "5px";
    const src = document.getElementById("container");
    src.appendChild(img);
  }
}

const eventClickVideo = document.getElementById("clickVideo");
eventClickVideo.addEventListener("click", hideVideo);

//Video//
function hideVideo() {
  const h2 = document.createElement("h2"); // <h2
  h2.innerText = "BAYNK: Come Home";
  h2.setAttribute("style", "font-size: 0.6em; text-align: center");

  const iframe = document.createElement("iframe"); //<iframe>
  iframe.src = "https://www.youtube.com/embed/F62mborUNlg";
  iframe.title = "Youtube video player";
  iframe.style.width = "560px";
  iframe.style.height = "315px";
  iframe.style.display = "block";
  iframe.style.margin = "auto";
  iframe.style.padding = "auto";
  iframe.style.frameborder = "0";
  iframe.style.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.style.allowfullscreen;

  document.getElementById("video").append(h2);
  document.getElementById("video").append(iframe);

  var video = document.getElementById("video");

  if (video.style.display == "none") {
    video.style.display == "block";
  }
}

//Perfil//

const h3 = document.createElement('h3');
h3.setAttribute("style", "font-size: 0.6em; text-align: center");
document.getElementById('perfil').append(h3);

