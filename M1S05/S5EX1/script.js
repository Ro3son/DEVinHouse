const inputs = ['input1', 'input2', 'input3', 'input4'];

inputs.forEach(function(element) {
    const input = document.createElement('input');
    input.type = 'number';
    document.querySelector('body').appendChild(input);
    
})

const button = document.createElement('button');
button.innerText = 'Disparar Ação';
button.id = 'btn';
document.querySelector('body').appendChild(button);

let btn = document.getElementById('btn');
btn.addEventListener('click', evento);

    function evento() {
         let desabilitaElementos = document.querySelector('input');
         desabilitaElementos.disabled = true;
}


