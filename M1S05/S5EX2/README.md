// Utilizando map com arrow function e document.querySelectorAll() //

Função de array (map) itera e retorna o dado, transformando cada elemento.

Crie uma pagina com 4 inputs e um botão de ação.
(os inputs poderão receber valores entre 0 e 1);

Quando o botão for disparado deve, utilizando a função de array (map) na lista de inputs(document.querySelectorAll()),
Criar 2 grupos de array(dentro da faixa 0 e 1 fora da faixa).

a) Grupo de array 1: números entre 0 e 1 deve conter elementos 'span'.
O conteúdo e sua cor de fundo serão resultantes do algoritmo:
const corDinamica = Math.floor(NumeroEscolhidoPeloUsuario * 16777215).toString(16);
O elemento deve ser adicionado em baixo do seu input correspondente.

b) Grupo de array 2: números maiores que 1 ou inválidos deve conter os próprios elementos html.
Esses elementos após separados devem cada um (forEach) modificar a cor da borda do seu input correspondente para indicar falha.

Como transformar:
const inputs = ['input1', 'input2', 'input3', 'input4'];
em: const inputs = [['input1', 'input2'], ['input3', 'input4']]; ?

Função 'criaGrupoDeArrays' é parâmetro da função addEventListener.

A variável constante 'input' é um NodeList.

Objetos NodeList são coleções de nodos semelhantes aos objetos retornados pelos métodos.

Na variável constante 'inputArray' criou-se uma nova instância de um array com o método Array.from(input);

Na variável grupo1 função de array está 'filtrando' outra variável 'inputArray'
com a seguinte condição: input.value maior ou igual a 0 e menor ou igual a 1
Se atende a condição 'true', caso contrário 'false'.

Grupo1 recebe função de array map()

limpar saída com remove()

insertAdjacentElement() method insere um elemento numa posição relativa..

Grupo2 recebe filter() condições semelhantes ao grupo1






