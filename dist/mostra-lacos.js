import { contagemVogais, inverterTexto, ehPalindromo } from "./lacos.js";
const seletor = document.querySelector("#acao");
seletor.addEventListener("change", () => {
    const input = document.querySelector("#palavra");
    const texto = input.value;
    const resultado = document.querySelector("#resultado");
    const escolha = seletor.value;
    //vogais
    if (escolha === "vogais") {
        const numeroVogais = contagemVogais(texto);
        resultado.textContent = numeroVogais.toString();
        //inversao
    }
    else if (escolha === "inverter") {
        const resultadoInversao = inverterTexto(texto);
        resultado.textContent = resultadoInversao;
        //palindromo
    }
    else if (escolha === "palindromo") {
        const textoInvertido = inverterTexto(texto);
        resultado.textContent = ehPalindromo(textoInvertido);
    }
});
