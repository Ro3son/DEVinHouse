function projecaoPopulacaoBR() {
    
    const requestURL = "https://servicodados.ibge.gov.br/api/v1/projecoes/populacao/";

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
            select.setAttribute("style", "font-size: 0.7em; font-family: monospace; border: 1px solid #000; color: #004282");

            option1.innerText = "Centro-Oeste";
            option1.value = "1";

            option2.innerText = "Nordeste";
            option2.value = "2";

            option3.innerText = "Sudeste";
            option3.value = "3";

            option4.innerText = "Sul";
            option4.value = "4";

            option5.innerText = "Norte";
            option5.value = "5";

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

            let localidade = document.querySelector("#localidade");
            localidade.addEventListener("change", projecaoPopulacaoRegiao);

            function projecaoPopulacaoRegiao() {
                const requestURL = "https://servicodados.ibge.gov.br/api/v1/projecoes/populacao/" + (localidade.value);
                fetch(requestURL)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (data) {
                        let p2 = document.createElement("p");
                        p2.setAttribute("style", "font-size: 1.2em; font-family: monospace; padding: 12px; text-align: center");

                        let dataProjecoesPopulacao = data.projecao.populacao;

                        if (localidade.value == 1) {
                            p2.innerText = `Projeção Para a Região Centro-Oeste é ${dataProjecoesPopulacao}`;
                        }
                        else if (localidade.value == 2) {
                            p2.innerText = `Projeção Para a Região Nordeste é ${dataProjecoesPopulacao}`;
                        }
                        else if (localidade.value == 3) {
                            p2.innerText = `Projeção Para a Região Sudeste é ${dataProjecoesPopulacao}`;
                        }
                        else if (localidade.value == 4) {
                            p2.innerText = `Projeção Para a Região Sul é ${dataProjecoesPopulacao}`;
                        }
                        else if (localidade.value == 5) {
                            p2.innerText = `Projeção Para a Região Norte é ${dataProjecoesPopulacao}`;
                        }

                        document.querySelector("main").append(p2);
                        document.body.style.paddingTop = '16px';
                        document.body.style.backgroundImage = "linear-gradient(to left, #118d2f, #f5df00, #193392)";
                    });
            }
            projecaoPopulacaoRegiao();
        });
}
projecaoPopulacaoBR();

