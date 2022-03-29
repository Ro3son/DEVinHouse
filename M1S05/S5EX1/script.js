document.body.setAttribute('style','background-color: #2a2d2f; font-size: 1em; font-family: sans-serif');

const div = document.createElement('div');

div.id = 'flex-container';
div.setAttribute('style', 'display: flex; justify-content: center; align-items: center; gap: 0.4em; height: 300px; padding: 16px');

document.querySelector('body').appendChild(div);

const inputs = ['input1', 'input2', 'input3', 'input4'];

inputs.forEach( () => {
    const input = document.createElement('input');
    input.type = 'number';
    input.placeholder = 'Digite um número'
    input.setAttribute('style', 'padding: 10px; border: 1px solid #00f8c0; color: #d9eee1; background-color: transparent');
    document.querySelector('div').appendChild(input);

});

const button = document.createElement('button');
button.innerText = 'Disparar Ação';
button.id = 'btn';
button.setAttribute('style','padding: 10px; border: 2px solid #2475ff; cursor: pointer; color: #d9eee1; background-color: transparent');
document.querySelector('div').appendChild(button);

let btn = document.getElementById('btn');
btn.addEventListener('click', desabilitaElementosESoma);

function desabilitaElementosESoma() {
    const input = document.querySelectorAll('input');
    input.forEach( (input) => input.disabled = true);
    
    const h1 = document.createElement('h1');
    h1.setAttribute('style', 'padding: 4px; text-align: center; color: #d9eee1');
    h1.innerText = `A soma é: ${inputs.value}`;
    document.querySelector('body').append(h1);
}