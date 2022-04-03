document.body.setAttribute(
    "style",
    "font-family: courier; background-color: #1a1a1b; color: #d7dadc; height: 400px"
);

const div = document.createElement("div");
const h2 = document.createElement("h2");
const input = document.createElement("input");

const div1 = document.createElement("div");
const div2 = document.createElement("div");
const h3 = document.createElement("h3");

div.id = "container";
div.setAttribute(
    "style",
    "display: flex; flex-direction: column; justify-content: center; align-items: center; height: 140px; padding: 16px"
);
h2.innerText = "Buscar Ranking: ";
input.type = "number";
input.placeholder = "Buscar..";
input.setAttribute(
    "style",
    "width: 200px; padding: 8px; font-size: 1em; background-color: transparent; color: #d7dadc; border-radius: 10px; border: 2px solid #ff4500; outline: none"
);
div1.id = "flex-container";
div1.setAttribute("style", "display: flex; justify-content: center");
div2.id = "container-nomes";

document.body.appendChild(div);

document.querySelector("div").append(h2);
document.querySelector("div").append(input);
document.querySelector("body").append(div1);

document.getElementById("flex-container").append(div2);

const requestURL = "https://servicodados.ibge.gov.br/api/v1/censos/nomes/ranking?qtd=2000";

fetch(requestURL)
    .then((response) => {
        return response.json();
    })
    .then((dados) => {
        let armazenaNomesRanking = dados; // Variável que armazena 100.000 nomes //

        let input = document.querySelector("input");
        input.addEventListener("keyup", () => {
            buscaRank(armazenaNomesRanking);
        });
    });

const buscaRank = (armazenaNomesRanking) => {
    const findRank = armazenaNomesRanking.find((objeto) => {
        if (objeto.rank == input.value) {
            let h1 = document.createElement("h1");
            h1.innerText = `Nome: ${objeto.nome}
            Frequência: ${objeto.freq}`;
            document.querySelectorAll("h1").forEach((item) => item.remove());
            document.querySelector("#container-nomes").append(h1);
        }
    });
};
