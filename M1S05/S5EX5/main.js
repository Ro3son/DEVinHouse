import { estilizaInputs } from './modules/estiliza.js';

const inputs = ['input1', 'input2', 'input3', 'input4'];

inputs.forEach((input) => {
    input = document.createElement('input');
    input.type = 'number';
    input.placeholder = 'Digite um número';
    estilizaInputs(input, [
        { borderRadius: '10px' },
        { borderStyle: 'hidden' },
        { display : 'block' } ,
        { margin: 'auto' },
        { padding: '12px' },
    ]);
    document.querySelector('body').appendChild(input);
});
