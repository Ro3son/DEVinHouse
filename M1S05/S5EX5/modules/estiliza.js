export const estilizaInputs = (elemento, arrayDeObjetos) => {

    let element;

    if (typeof elemento == 'string') {
        element = document.querySelectorAll('input');
    };
    if (typeof elemento == 'object') {
        element = elemento;
    };

    arrayDeObjetos.forEach((objeto) => {
        for (let estilo in objeto) {
            element.style[estilo] = objeto[estilo];
        }
    });
};
