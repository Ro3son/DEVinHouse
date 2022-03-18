// Create Divs //
const div1 = document.createElement("div"),
  div2 = document.createElement("div"),
  div3 = document.createElement("div");

div1.id = "perfil";
div1.setAttribute(
  "style",
  "display: flex; flex-direction: column; align-items: center; padding: 16px; height: 550px; color: #d9eee1"
);
div2.id = "galeria";
div2.setAttribute("style", "padding: 16px; height: 350px");
div3.id = "video";
div3.setAttribute("style", "padding: 16px; height: 450px");

document.body.append(div1);
document.body.append(div2);
document.body.append(div3);

//Perfil//
function hideProfile() {
  const h3 = document.createElement("h3");
  h3.innerText = "Meu Perfil";
  h3.setAttribute(
    "style",
    "font-size: 0.6em; text-align: center; text-decoration: underline; padding: 16px"
  );

  const divIcon = document.createElement("div");
  divIcon.id = "user";
  divIcon.style.fontSize = "1em";

  const userIcon = document.createElement("i");
  userIcon.className = "fa-solid fa-user";

  document.getElementById("perfil").append(h3);
  document.getElementById("perfil").append(divIcon);
  document.getElementById("user").appendChild(userIcon);

  const divProfileName = document.createElement("div");
  divProfileName.id = "profile-name";

  const h1ProfileName = document.createElement("h1");
  h1ProfileName.innerText = "Robson De Andrade";
  h1ProfileName.style.fontSize = "0.6em";
  h1ProfileName.style.textAlign = "center";

  const ulProfileName = document.createElement("ul");
  ulProfileName.id = "list";
  ulProfileName.style.fontSize = "0.3em";

  const liProfileName1 = document.createElement("li"),
    liProfileName2 = document.createElement("li");

  liProfileName1.innerText = "Email: firstname@username.com";
  liProfileName1.style.textAlign = "center";
  liProfileName1.style.listStyleType = "none";
  liProfileName2.innerText = "Telephone: xxxx xxx xxxx";
  liProfileName2.style.textAlign = "center";
  liProfileName2.style.listStyleType = "none";

  document.getElementById("perfil").append(divProfileName);
  document.getElementById("profile-name").appendChild(h1ProfileName);
  document.getElementById("profile-name").append(ulProfileName);
  document.getElementById("list").append(liProfileName1);
  document.getElementById("list").append(liProfileName2);

  const divStacks = document.createElement("div"),
    stacksParagraph = document.createElement("p");

  divStacks.id = "stacks";
  stacksParagraph.innerText = "Stacks: ";
  stacksParagraph.style.fontSize = "0.4em";
  stacksParagraph.style.textAlign = "center";

  const ulStacks = document.createElement("ul"),
    liStacks1 = document.createElement("li"),
    liStacks2 = document.createElement("li"),
    liStacks3 = document.createElement("li");

  ulStacks.id = "list2";

  liStacks1.innerText = "HTML";
  liStacks1.style.color = "#ff6347";
  liStacks1.style.fontSize = "0.2em";
  liStacks1.style.textAlign = "center";
  liStacks1.style.listStyleType = "none";

  liStacks2.innerText = "CSS";
  liStacks2.style.color = "#2475ff";
  liStacks2.style.fontSize = "0.2em";
  liStacks2.style.textAlign = "center";
  liStacks2.style.listStyleType = "none";

  liStacks3.innerText = "JAVASCRIPT";
  liStacks3.style.color = "#efd81d";
  liStacks3.style.fontSize = "0.2em";
  liStacks3.style.textAlign = "center";
  liStacks3.style.listStyleType = "none";

  document.getElementById("perfil").append(divStacks);
  document.getElementById("stacks").append(stacksParagraph);
  document.getElementById("stacks").append(ulStacks);
  document.getElementById("list2").append(liStacks1);
  document.getElementById("list2").append(liStacks2);
  document.getElementById("list2").append(liStacks3);
}
//Galeria//
function hideImg() {
  const h1 = document.createElement("h1"); // <h1>
  h1.innerText = "Minha Galeria de Bicicletas";
  h1.style.color = "#d9eee1";
  h1.style.textDecoration = "underline";
  h1.style.textDecorationColor = "#00f8c0";
  h1.style.fontSize = "0.6em";
  h1.style.textAlign = "center";

  const div1Div2 = document.createElement("div"); // <div> container
  div1Div2.id = "container";
  div1Div2.setAttribute(
    "style",
    "display: flex; justify-content: center; align-items: center; gap: 0.1em; padding: 16px; height: 250px"
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
    img.style.border = "2px solid #00f8c0";
    const src = document.getElementById("container");
    src.appendChild(img);
  }
}
//Video//
function hideVideo() {
  const h2 = document.createElement("h2"); // <h2>
  h2.innerText = "Bike the World";
  h2.setAttribute(
    "style",
    "color: #d9eee1; font-size: 0.6em; text-align: center; padding: 16px; text-decoration: underline"
  );

  const iframe = document.createElement("iframe"); //<iframe>
  iframe.src = "https://www.youtube.com/embed/HcBFmX5rM4M";
  iframe.title = "Youtube video player";
  iframe.style.width = "660px";
  iframe.style.height = "315px";
  iframe.style.display = "block";
  iframe.style.margin = "auto";
  iframe.style.padding = "auto";
  iframe.style.frameborder = "0";
  iframe.style.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.style.allowfullscreen;
  iframe.style.border = "2px solid #2475ff";

  document.getElementById("video").append(h2);
  document.getElementById("video").append(iframe);
}

const eventClickProfile = document.getElementById("clickPerfil");
eventClickProfile.addEventListener("click", hideProfile);

const eventClick = document.getElementById("clickGaleria");
eventClick.addEventListener("click", hideImg);

const eventClickVideo = document.getElementById("clickVideo");
eventClickVideo.addEventListener("click", hideVideo);
