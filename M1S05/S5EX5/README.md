Crie um modulo javascript que exporte um Objeto que contenha

1) uma função que receba 2 parâmetros

A) Um elemento HTML ou uma string contendo um seletor CSS (para ser utilizado pelo document.querySelector())

B) Um array de objetos que quando utilizado terá a seguinte estrutura [{propriedade:"valor"}]

    Essa função deve aplicar o devido estilo ao elemento indicado.

A expectativa é de que a função seja chamada da seguinte maneira:

import { estiliza } from "./utilitarios.js" // ou o nome que achar interessante
...
const inputs = Array.from(document.querySelectorAll("input"));
inputs.forEach( (input) => {
estiliza(input , [ { borderRadius : "10px" } , { borderStyle : "hidden" } ] );
} )
estiliza("#retangulo" , [ {width: "1200px"} , {heigth : "400px" } ] )
Finalmente.

Escolha um exercício anterios que foi necessário realizar diversas estilizações através do javascript e substitua os códigos pela nova função criada importando-a ao código.

Para que os módulos funcionem corretamente em um navegador, você precisa garantir que seu servidor os esteja servindo com um cabeçalho Content-Type que contenha um tipo MIME JavaScript, como text / javascript. Caso contrário, você receberá um erro estrito de verificação do tipo MIME, de acordo com as linhas "O servidor respondeu com um tipo MIME não JavaScript" e o navegador não executará seu JavaScript. 

você não pode usar a exportação dentro de uma função, por exemplo.

[https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Modules]
