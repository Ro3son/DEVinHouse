// Usar ForEach com arrow function e document.querySelectorAll() //

função de array forEach itera sobre os elementos.
arrow function se refere a uma sintaxe mais simples usando => no lugar da palavra reservada 'function'.
document.querySelectorAll() se refere ao DOM.

1. Entendendo o problema:

Criar uma página web com 4 inputs tipo 'number',
e um botão de disparar ação.
Quando o botão for clicado dispara a seguinte ação:
função forEach deve percorrer os inputs..(document.querySelectorAll())
Assim desabilitando-os com (atributo de tag input disabled="true")
Por fim, os valores devem ser somados e o resultado exibido em um h1.

2. Planejando o Problema:

Crie uma variável 'constante' que recebe uma array de strings para os elementos 'input'.
Percorra a array de strings com forEach e crie quatro elementos 'input' e atribua o tipo 'number' aos elementos.

declare outra variável 'constante' que cria o elemento 'button' com innerText 'disparar ação' e id 'btn.

declare uma variável que seleciona a id do botão. 

Meu problema tem uma user interface em um 'click'? então devo usar AddEventListerner().

AddEventListener tem como parâmetro outra função chamada 'desabilitaElementoESoma'. "Callback".

Na função desabilitaElementosESoma seleciona todos os inputs e
para cada input recebe o atributo 'disabled = true'.

Tenho alguma entrada? alguns números digitados nos inputs?
O usuário entra com valores númericos '1 2 3 4' em cada input..

Ao clicar no botão os números são somados..

Como somo estes números?

Crio uma variável 'soma' igual a 0.

Crio um array dos inputs..

Tenho um parâmetro chamado 'sum' que recebe o valor do input

Se 'sum' não é um (not a number) soma += add

Minha saída é a soma dos valores de entrada exibido na tela.

3. Dividindo o problema em partes:

3.1 - Criando os ELEMENTOS com DOM.
3.2 - Adicionando o EVENTO ao botão.
3.3 - Escrevendo a função que desabilita os elementos.
3.4 - Somando os valores dos elementos.


querySelectorAll returns a NodeList, not an element. So you can't add event listener to it directly.[https://stackoverflow.com/questions/64470325/queryselectorall-not-working-for-classes-but-normal-queryselector-is-just-fine]
[https://stackoverflow.com/questions/42986846/how-get-total-sum-of-3-input-box-values-using-javascript]