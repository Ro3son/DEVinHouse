/*
Altere as funções abaixo usando async-await para retorno e tratamento de promises:
*/
async function obterClienteNoBancoDeDados(idCliente) {
    return await new Promise( (resolve, reject) => {
            const cliente = { nome: 'bruce wayne', id: idCliente };
            resolve(cliente);
    });
}
obterClienteNoBancoDeDados();

async function processar() {
    try {
         let clientes = await obterClienteNoBancoDeDados(7)
        .then(cliente => console.log(cliente));
    } catch (error) {
        console.log(error);
    }
   
}
console.log(processar());