Para reforçar os conhecimentos da semana 4 e aprofundar as possibilidades da semana 3 vamos...

1- Crie um input de texto simples. Centralize e torne maior.

2-Dado a URL que retorna um array de nomes
https://servicodados.ibge.gov.br/api/v1/censos/nomes/ranking?qtd=100000
(sim vamos manipular cem mil nomes).

Realize a requisição e armazene o resultado em uma variável disponível globalmente.

3 - Adicione um evento em que a cada tecla digitada:

A) Utilizando o método de array Filter, crie um novo array contendo apenas os nomes que contém um trecho do texto digitado pelo usuário.

B) Mostre para o usuário em uma div a quantidade de nomes encontrador, e liste-os usando uma lista (ul ou ol) ou tabela (table).


1. Entendendo o problema:

Criar um input de texto.

ENTRA uma letra qualquer ou um nome.

Tenho um 'evento de teclado' filtrando os nomes.

Buscar os dados da API com fetch.

SAI a lista de nomes em table.


2. Planejando o problema:

Tenho uma user interface cuja entrada é fornecida pelo usuário.

Tenho uma ação com a entrada do usuário cuja saída é o conteúdo requisitado.

3. Dividindo o problema:

3.1 - Criando o elemento input, div, table.
3.2 - Fazendo a requisição.