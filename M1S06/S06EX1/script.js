const saudacao = [
    { Nome: 'Daenerys Targaryen',
        Titulos: [
            'Rainha dos Ândalos',
            'Protetora dos Sete Reinos',
            'Khaleesi do Grande Mar de Grama',
            'Mãe de Dragões',
            'Quebradora de Correntes',
        ]
    }
];
function saudar(nome, ...titulos) { // Operador rest agrupa valores //
 console.log('Olá ' + nome + ', ' + titulos);
}
saudar(saudacao[0].Nome, saudacao[0].Titulos.slice(0, 5));
