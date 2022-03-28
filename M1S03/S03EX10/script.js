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

const valorStorage = localStorage.getItem('conjuntoDeValores1');

let resultadoPreferencias = [];

if (valorStorage != null) {
    const objConjuntoValores = JSON.parse(valorStorage);
    resultadoPreferencias = objConjuntoValores;

    mudaCor(objConjuntoValores.corDeFundo, objConjuntoValores.tempo);
}

function mudaCor(cor, tempo) {
    document.body.style.background = cor;
    setTimeout(function () {
        document.body.append(tempo);
    }, tempo * 1000);
}

let botao = document.querySelector('button');
botao.addEventListener('click', addCor);

function addCor() {
    const cor = document.getElementById('cor').value;
    const tempo = document.getElementById('tempo').value;
    mudaCor(cor, tempo);
    const conjunto = {
        'backgroundColor': cor,
        'tempo': tempo,
    }
    const conjuntoEmString = JSON.stringify(conjunto);

    localStorage.setItem('conjuntoDeValores', conjuntoEmString)
}
