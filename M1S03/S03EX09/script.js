// Variável constante recebe array de strings //
const nomesDeFamiliares = ["Robson", "Iolanda", "Cicero", "Artur", "Braulina", "João", "Kamila"];

let list = document.querySelector("#list");

// Criando vários elementos <li> //
nomesDeFamiliares.forEach(function (element, index) {
    const li = document.createElement("li");
    li.value = index;
    li.innerText = element;
    li.setAttribute("style", "list-style-type: none; font-size: 2em; font-family: monospace");
    document.querySelector("ul").append(li);
});

const requestURL = "https://servicodados.ibge.gov.br/api/v2/censos/nomes/";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (json) {
        
        let dataNomes = json;

        console.log(dataNomes);

        // Chart.js //
        const labels = [
            "1030",
            "1930,1940",
            "1040,1950",
            "1050,1060",
            "1060,1970",
            "1970,1980",
            "1980,1990",
            "1990,2000",
            "2000,2010",
        ];
        const data = {
            labels: labels,
            datasets: [
                {
                    label: "Evolução Histórica de Cada Nome",
                    backgroundColor: "rgb(255, 99, 132)",
                    borderColor: "rgb(255, 99, 132)",
                    data: [0, 300000],
                },
            ],
        };
        const config = {
            type: "line",
            data: data,
            options: {
                responsive: true,
            },
        };
        const myChart = new Chart(document.getElementById("myChart"), config);
    });
