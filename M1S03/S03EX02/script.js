//S03EX02

// Create <h1>
var heading = document.createElement("h1"),
    div = document.createElement("div");
heading.innerText = "Página Dinâmica";
heading.setAttribute("style", "font-family: courier; text-align: center");
document.getElementById("body").append(heading);
// <div> .container
div.className = "container";
div.id = "container";
div.setAttribute("style", "display: flex; gap: 8px; justify-content: center; align-items: center");
document.getElementById("body").append(div);
// variables <img>
var img1 = document.createElement("img"),
    img2 = document.createElement("img"),
    img3 = document.createElement("img");

img1.src = "img/jacek-dylag-giFeTshEYYQ-unsplash.jpg";
img1.setAttribute('style', 'width: 200px; height: 200px')

img2.src = "img/josh-nuttall-eTrHMJwI5ro-unsplash.jpg";
img2.setAttribute('style', 'width: 200px; height: 200px')

img3.src = "img/mikkel-bech-yjAFnkLtKY0-unsplash.jpg";
img3.setAttribute('style', 'width: 200px; height: 200px')

document.getElementById("container").appendChild(img1);
document.getElementById("container").appendChild(img2);
document.getElementById("container").appendChild(img3);

// Variables create <article> <h2> <p>
var article = document.createElement("article"),
    h2Article = document.createElement("h2"),
    paragraphArticle = document.createElement("p");

article.id = "article";

h2Article.innerText = "Meu Artigo";
h2Article.id = "h2";
h2Article.setAttribute('style', 'text-align: center; font-family: courier');

paragraphArticle.innerText = "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.";
paragraphArticle.setAttribute('style', 'text-align: center; font-family: courier');

document.getElementById("body").append(article);
document.getElementById("article").appendChild(h2Article);
document.getElementById("article").appendChild(paragraphArticle);

// Unordered list
var ul = document.createElement('ul'),
    listItem1 = document.createElement('li'),
    listItem2 = document.createElement('li'),
    listItem3 = document.createElement('li');

ul.id = "ul";
ul.setAttribute('style', 'font-size: 1em; font-family: courier; text-align: center')
listItem1.innerText = 'Item 1';
listItem2.innerText = 'Item 2';
listItem3.innerText = 'Item 3';

document.getElementById('body').append(ul);
document.getElementById('ul').appendChild(listItem1);
document.getElementById('ul').appendChild(listItem2);
document.getElementById('ul').appendChild(listItem3);