document.body.setAttribute(
    "style",
    "font-family: courier; background-color: #1a1a1b; color: #d7dadc"
  );

  const div = document.createElement("div");
  const h1 = document.createElement("h1");
  const input = document.createElement("input");

  const div1 = document.createElement("div");
  const div2 = document.createElement("div");
  const h2 = document.createElement("h2");

  div.id = "container";
  div.setAttribute(
    "style",
    "display: flex; flex-direction: column; justify-content: center; align-items: center; height: 140px; padding: 16px"
  );
  h1.innerText = "Digite um nome: ";
  input.type = "text";
  input.placeholder = "Buscar nome..";
  input.setAttribute(
    "style",
    "width: 200px; padding: 8px; font-size: 1em; background-color: transparent; color: #d7dadc; border-radius: 10px; border: 2px solid #ff4500; outline: none"
  );
  div1.id = "flex-container";
  div1.setAttribute("style", "display: flex; justify-content: center");
  div2.id = "container-nomes";
  h2.innerText = "Resultado: ";

  document.body.appendChild(div);

  document.querySelector("div").append(h1);
  document.querySelector("div").append(input);
  document.querySelector("body").append(div1);

  document.getElementById("flex-container").append(div2);
  document.getElementById("container-nomes").append(h2);

let ul;  // Variável global que armazena o resultado da requisição //

const requestURL = 'https://servicodados.ibge.gov.br/api/v1/censos/nomes/ranking?qtd=2000';

fetch(requestURL)
    .then((response) => {
        return response.json();
    })
    .then((dados) => {
        let armazenaNomes = dados; // Variável que armazena 100.000 nomes //

        let input = document.querySelector('input');
        input.addEventListener('keyup', () => { 
            buscaNome(armazenaNomes);
        });
    });

const buscaNome = (armazenaNomes) => {
    const filtraNome = armazenaNomes.filter((objeto) => {
        return objeto.nome.includes(input.value); // includes() retorna true se a string contém uma string específica, caso contrário retorna false//
    });
    if (ul != null) {
        ul.remove();     // Limpa saída //
    };
    document.querySelectorAll('ul').forEach((item) => item.remove());
    ul = document.createElement('ul');
    ul.setAttribute('style', 'border: 2px solid #ff4500; padding: 25px; border-radius: 10px')
    document.getElementById('container-nomes').append(ul);
    
    filtraNome.forEach((objeto) => {
    let li = document.createElement('li');
        li.innerText = `${objeto.nome}
            Rank: ${objeto.rank}
            Frequência: ${objeto.freq}`;
        document.querySelector('ul').append(li);
    });
};
    
    