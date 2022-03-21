function projecaoPopulacaoBR() {
  const requestURL =
    "https://servicodados.ibge.gov.br/api/v1/projecoes/populacao/BR";

  fetch(requestURL)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const main = document.createElement("main"),
        h1 = document.createElement("h1");
      p = document.createElement("p");
      h1.innerText = "Projeção População Brasileira: ";
      h1.setAttribute(
        "style",
        "text-align: center; font-family: monospace; color: #ffffff"
      );
      p.innerText = `${data.projecao.populacao}`;
      p.setAttribute(
        "style",
        "font-size: 4em; text-align: center; font-family: monospace; color: #193392"
      );
      document.querySelector("body").append(main);
      document.querySelector("main").append(h1);
      document.querySelector("main").append(p);
      document.body.style.backgroundImage =
        "linear-gradient(to left, #118d2f, #f5df00, #193392)";
      document.body.style.padding = "200px";
    });
}
projecaoPopulacaoBR();
