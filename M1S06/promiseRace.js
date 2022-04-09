/*
O sistema de uma empresa, após efetuar a venda, chama funções remotas de duas empresas de entrega dos pedidos, 
e aquela que responder mais rápido nossa requisição fica responsável pela entrega.
O retorno das chamadas foram adicionados nas constates abaixo: 'retornoEmpresa1' e 'retornoEmpresa2'.
Usando 'Promise.race()', recupere o valor da promise da empresa vencedora e imprima no console do navegador.
*/
const retornoEmpresa1 = new Promise( (resolve, reject) => 
    setTimeout(resolve, 5000, "Empresa 1") ); // 5 segundos
const retornoEmpresa2 = new Promise( (resolve, reject) => 
    setTimeout(resolve, 3000, "Empresa 2") ); // 3 segundos

let race = Promise.race([retornoEmpresa1, retornoEmpresa2])
.then((value) => {
    console.log('Resolve:', value); // empresa 2
});

/*
 Promise.race() retorna uma promise que resolve ou rejeita assim que uma das promises no iterável resolver ou rejeitar, 
 com o valor ou razão daquela promise.
*/