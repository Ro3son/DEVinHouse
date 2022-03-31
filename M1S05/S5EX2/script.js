document.body.setAttribute('style', 'background-color: #2a2d2f; font-size: 1em; font-family: sans-serif');

const div = document.createElement('div');

div.id = 'flex-container';

div.setAttribute('style', 'display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 0.4em; height: 400px; padding: 16px');
document.querySelector('body').appendChild(div);

const inputs = ['input1', 'input2', 'input3', 'input4'];

inputs.forEach(() => {
    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = 'Digite um valor'
    input.setAttribute('style', 'padding: 10px; border: 1px solid #00f8c0; color: #d9eee1; background-color: transparent');
    document.querySelector('div').appendChild(input);

});

const button = document.createElement('button');
button.innerText = 'Disparar Ação';
button.id = 'btn';
button.setAttribute('style', 'padding: 10px; border: 2px solid #2475ff; cursor: pointer; color: #d9eee1; background-color: transparent');
document.querySelector('div').appendChild(button);

let btn = document.getElementById('btn');
btn.addEventListener('click', criaGrupoDeArrays);

function criaGrupoDeArrays() {
    const input = document.querySelectorAll('input');

    const inputArray = Array.from(input);
    
    let grupo1 = inputArray.filter((input) => (parseFloat(input.value) >= 0 && 
    parseFloat(input.value) <= 1) ? true : false);
    
    grupo1 = grupo1.map((input) => {
        const span = document.createElement('span');
        const corDinamica = '#' + Math.floor(input.value * 16777215).toString(16);
        span.innerText = corDinamica;
        span.style.backgroundColor = corDinamica;
        document.querySelectorAll('span').forEach((item) => item.remove());
        return [span, input];
    });

    grupo1.forEach((item) => {
        const span = item[0];
        const input = item[1];
        input.insertAdjacentElement('afterend', span);
        input.style.border = '1px solid grey';
    });

    const grupo2 = inputArray.filter((input) => (!(parseFloat(input.value) >= 0 && 
    parseFloat(input.value) <= 1) ? input : null));   
    
}
