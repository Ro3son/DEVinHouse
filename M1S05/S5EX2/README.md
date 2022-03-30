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
Esses elementos após separados devem cada um (forEach) modificar a cor da borda do seu input correspondente de
vermelho para indicar falha.

Como transformar:
const inputs = ['input1', 'input2', 'input3', 'input4'];
em: const inputs = [['input1', 'input2'], ['input3', 'input4']]; ?


