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
divs.forEach(() => {
    const div = document.createElement("div");
    let estilos = getStyle(alturaMaxima,larguraMaxima);

    div.style.border = "5px solid black"; 
    div.style.left = estilos.left;
    div.style.top = estilos.top;
    div.style.height = estilos.height;
    div.style.width = estilos.width;

//     var rect = div.getBoundingClientRect();
//     if(getStyle(rect)) {
//         div.style.backgroundColor = 'wheat';
//     } else {
//         div.style.backgroundColor = 'lightblue';
// };

    document.body.append(div);
});
// O método Element.getBoundingClientRect() retorna o tamanho de um elemento e sua posição relativa ao viewport. //
// rect é um objeto DOMRect com seis propriedades: left, top, right, bottom, width, height // mdn


// for (let index = 0; index < 5; index++) {
//     const div = document.createElement("div");

//     let estilos = getStyle(alturaMaxima,larguraMaxima);

//     div.style.border = "5px solid black"; 
//     div.style.left = estilos.left;
//     div.style.top = estilos.top;
//     div.style.height = estilos.height;
//     div.style.width = estilos.width;

//     document.body.append(div);
    
// }