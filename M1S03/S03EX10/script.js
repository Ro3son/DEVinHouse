const inputColor = document.createElement('input'),
    inputNumber = document.createElement('input'),
    button = document.createElement('button');

inputColor.type = 'color';
inputColor.id = 'cor';

inputNumber.type = 'number';
inputNumber.setAttribute('min', '1');
inputNumber.id = 'tempo';

button.innerText = 'Add Cor';

document.body.appendChild(inputColor);
document.body.appendChild(inputNumber);
document.body.appendChild(button);

let cores = 0;

const valorStorage = localStorage.getItem('valorStorage');

let resultadoPreferencias = [];

if (valorStorage != null) {
    const objConjuntoValores = JSON.parse(valorStorage);
    resultadoPreferencias = objConjuntoValores;

    // mudaCor(objConjuntoValores.corDeFundo, objConjuntoValores.tempo);
    inicia();
};


function inicia() {
    document.body.style.backgroundColor = resultadoPreferencias[cores].backgroundColor;
    setTimeout(function () {
        cores++;
        if (cores == resultadoPreferencias.length) {
            cores = 0;
        } // else {
        inicia();
    }, resultadoPreferencias[cores].tempoCor * 1000);
};

function mudaCor(cor, tempo) {
    document.body.style.background = cor;
    setTimeout(function () {
        console.log('Aguardando tempo da cor');
        // document.body.style.background = preferencias[0].corDeFundo;
    }, tempo * 1000);
}

let botao = document.querySelector('button');
botao.addEventListener('click', addCor);

function addCor() {
    const cor = document.getElementById('cor').value;
    const tempo = document.getElementById('tempo').value;
    document.querySelector('#cor').value = '#000000';
    document.querySelector('#tempo').value = '';
    mudaCor(cor, tempo);
    const conjunto = {
        'backgroundColor': cor,
        'tempoCor': tempo,
    }
    resultadoPreferencias.push(conjunto);

    const conjuntoEmString = JSON.stringify(resultadoPreferencias);

    localStorage.setItem('valorStorage', conjuntoEmString);
}
