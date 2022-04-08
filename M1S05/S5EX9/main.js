const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

const getStyle = (xMaximo,yMaximo) => {
    return {
        top: getRandomInt(10, xMaximo) + "px",
        left: getRandomInt(10, yMaximo) + "px",
        height: getRandomInt(10,500) + "px",
        width: getRandomInt(10,500) + "px"
    }

};

const larguraMaxima = 1000, alturaMaxima = 300;

const divs = ['div1', 'div2', 'div3', 'div4', 'div5'];
divs.forEach((elemento) => {
    const div = document.createElement("div");
    div.id = elemento;
    let estilos = getStyle(alturaMaxima,larguraMaxima);

    div.style.left = estilos.left;
    div.style.top = estilos.top;
    div.style.height = estilos.height;
    div.style.width = estilos.width;

    document.body.append(div);
   
});

document.body.style.backgroundColor = '#000';
document.getElementById('div1').style.border = '4px solid orange';
document.getElementById('div2').style.border = '4px solid lightgreen';
document.getElementById('div3').style.border = '4px solid lightpink';
document.getElementById('div4').style.border = '4px solid lightblue';
document.getElementById('div5').style.border = '4px solid wheat';

// O método Element.getBoundingClientRect() retorna o tamanho de um elemento e sua posição relativa ao viewport. //
// rect é um objeto DOMRect com seis propriedades: left, top, right, bottom, width, height // mdn