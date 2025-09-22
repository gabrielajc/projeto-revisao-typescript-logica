import { contagemVogais, inverterTexto, ehPalindromo } from "./lacos.js";


const seletor = document.querySelector("#acao") as HTMLSelectElement;

seletor.addEventListener("change", () => {
const input = document.querySelector("#palavra") as HTMLInputElement;
const texto = input.value
const resultado = document.querySelector("#resultado") as HTMLDivElement;
const escolha = seletor.value

//vogais
if(escolha === "vogais"){
    const numeroVogais: number = contagemVogais(texto);
    resultado.textContent = numeroVogais.toString();

//inversao
} else if (escolha === "inverter") {
    const resultadoInversao = inverterTexto(texto);
    resultado.textContent = resultadoInversao;

//palindromo
} else if (escolha === "palindromo") {
    const textoInvertido = inverterTexto(texto);
    resultado.textContent = ehPalindromo(textoInvertido);
}
  })
