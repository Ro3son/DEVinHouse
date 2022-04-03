Filtrar dados de uma API de nomes

Escrever um programa em que o usuário faz uma busca por nomes 
e tem como resultado uma lista de nomes correspondente.

1- Crie um input de texto.

2-Dado a URL que retorna um array de nomes
https://servicodados.ibge.gov.br/api/v1/censos/nomes/ranking?qtd=100000
(sim vamos manipular cem mil nomes).

Realize a requisição e armazene o resultado em uma variável disponível globalmente.

3 - Adicione um evento em que a cada tecla digitada:

A) Utilizando o método de array Filter, crie um novo array contendo apenas os nomes que contém um trecho do texto digitado pelo usuário.

B) Mostre para o usuário em uma div a quantidade de nomes encontrado, e liste-os usando uma lista (ul ou ol) ou tabela (table).

Para cada 'chave' do objeto de armazenaNomes cria uma lista.
Cada lista deve conter o atributo innerText com nome, rank e frequência.

Filta os nomes da variável armazenaNomes quando o valor da entrada for digitado.
Espera como saída a lista de nomes, rank e frequência.

https://pt.stackoverflow.com/questions/3021/como-posso-checar-se-uma-string-cont%C3%A9m-outra-em-javascript

Sometimes it is also useful to use loops if we need to calculate some other aspects based on data within the array or list of elements.
