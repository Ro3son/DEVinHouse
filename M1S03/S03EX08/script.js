function projecaoPopulacaoBR() {
    const requestURL =
        "https://servicodados.ibge.gov.br/api/v1/projecoes/populacao/BR";

    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const main = document.createElement("main"),
                h1 = document.createElement("h1"),
                p = document.createElement("p"),
                form = document.createElement("form"),
                label = document.createElement("label"),
                select = document.createElement("select");

            const option1 = document.createElement("option"),
                  option2 = document.createElement("option"),
                  option3 = document.createElement("option"),
                  option4 = document.createElement("option"),
                  option5 = document.createElement("option");
            
            h1.innerText = "Projeção População Brasileira: ";
            h1.setAttribute("style", "text-align: center; font-family: monospace; color: #ffffff");

            p.innerText = `${data.projecao.populacao}`;
            p.setAttribute("style", "font-size: 4em; text-align: center; font-family: monospace; color: #193392");

            form.setAttribute("style", "font-size: 2em; text-align: center; font-family: monospace; color: #ffffff");

            label.innerText = "Escolha uma Região: ";

            select.id = "localidade";
            select.setAttribute("style", "font-size: 0.7em; font-family: monospace; border: 1px solid #000; color: #004282")
            
            option1.innerText = "Centro-Oeste";
            option2.innerText = "Nordeste";
            option3.innerText = "Sudeste";
            option4.innerText = "Sul";
            option5.innerText = "Norte";

            document.querySelector("body").append(main);
            document.querySelector("main").append(h1);
            document.querySelector("main").append(p);
            document.querySelector("main").append(form);
            document.querySelector("form").append(label);
            document.querySelector("form").append(select);

            document.querySelector("select").append(option1);
            document.querySelector("select").append(option2);
            document.querySelector("select").append(option3);
            document.querySelector("select").append(option4);
            document.querySelector("select").append(option5);
        
            document.body.style.padding = "200px";
            document.body.style.backgroundImage = "linear-gradient(to left, #118d2f, #f5df00, #193392)";

        });
}
projecaoPopulacaoBR();
