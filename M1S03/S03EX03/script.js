document.body.style.backgroundColor = "whitesmoke";

var heading = document.createElement("h1"); // Create Element <h1>
heading.innerText = "Minhas Imagens";
heading.setAttribute("style", "font-family: courier; text-align: center");
document.getElementById("body").append(heading);
heading.remove("h1"); // Remove <h1>

var h6 = document.createElement("h6");
h6.innerText = "Minhas Imagens";
h6.setAttribute(
    "style",
    "margin-top: 40px; margin-bottom: 40px; font-family: courier; text-align: center; font-size: 1.6em"
);
h6.style.textDecoration = "underline";
h6.style.textDecorationColor = "#f08d49";
document.getElementById("body").append(h6);

var div = document.createElement("div"); // Create Element <div> flex container
div.className = "container";
div.id = "container";
div.setAttribute(
    "style",
    "display: flex; justify-content: center; align-items: center; gap: 1em; padding: 16px; margin-bottom: 40px; height: 250px"
);
document.getElementById("body").append(div);

var img1 = document.createElement("img"), // Create variables elements <img>
    img2 = document.createElement("img"),
    img3 = document.createElement("img");

img1.src = "img/jacek-dylag-giFeTshEYYQ-unsplash.jpg";
img1.setAttribute("style", "width: 100%; height: 250px; padding: 5px");

img2.src = "img/josh-nuttall-eTrHMJwI5ro-unsplash.jpg";
img2.setAttribute("style", "width: 100%; height: 250px; padding: 5px");

img3.src = "img/mikkel-bech-yjAFnkLtKY0-unsplash.jpg";
img3.setAttribute("style", "width: 100%; height: 250px; padding: 5px");

document.getElementById("container").appendChild(img1);
document.getElementById("container").appendChild(img2);
document.getElementById("container").appendChild(img3);

// Variables create element <article> <h2> <p>
var article = document.createElement("article"),
    h2Article = document.createElement("h2"),
    paragraphArticle = document.createElement("p");

article.id = "article";
article.setAttribute(
    "style",
    "padding: 20px; margin: 20px; box-shadow: 5px 5px 5px 5px #000"
);
h2Article.innerText = "Meu Artigo";
h2Article.id = "h2";
h2Article.setAttribute("style", "text-align: center; font-family: courier");

paragraphArticle.innerText =
    "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";
paragraphArticle.setAttribute(
    "style",
    "text-align: center; font-family: courier"
);

document.getElementById("body").append(article);
document.getElementById("article").appendChild(h2Article);
document.getElementById("article").appendChild(paragraphArticle);

// ul, li
var ul = document.createElement("ul");
// listItem1 = document.createElement("li"),
//     listItem2 = document.createElement("li"),
//     listItem3 = document.createElement("li");

ul.id = "ul";
ul.setAttribute(
    "style",
    "display: flex; justify-content: space-between; align-items: center; padding: 40px; margin: 16px; font-size: 1em; font-family: courier"
);
ul.style.color = "#f08d49";
ul.style.listStyleType = "none";
//Remove elements <li>
ul.remove("li");

// Element creation 5 <li>
var newListItem1 = document.createElement("li"),
    newListItem2 = document.createElement("li"),
    newListItem3 = document.createElement("li");
newListItem4 = document.createElement("li");
newListItem5 = document.createElement("li");

newListItem1.innerText = "new Item 1";
newListItem2.innerText = "new Item 2";
newListItem3.innerText = "new Item 3";
newListItem4.innerText = "new Item 4";
newListItem5.innerText = "new Item 5";

document.getElementById("body").append(ul);
document.getElementById("ul").appendChild(newListItem1);
document.getElementById("ul").appendChild(newListItem2);
document.getElementById("ul").appendChild(newListItem3);
document.getElementById("ul").appendChild(newListItem4);
document.getElementById("ul").appendChild(newListItem5);
