"use strict";
//imprimindo cada letra de uma palavra
const textoLetras = "arara";
for (let primeiroIndice = 0; primeiroIndice < textoLetras.length; primeiroIndice++) {
    console.log(textoLetras[primeiroIndice]);
}
//logica para inverter o texto
function inverterTexto(textoInverter) {
    let textoInvertido = "";
    for (let segundoIndice = 0; segundoIndice < textoInverter.length; segundoIndice++) {
        textoInvertido += textoInverter[textoInverter.length - 1 - segundoIndice];
    }
    console.log(textoInvertido);
    return textoInvertido;
}
//imprimindo palavra ao contrário
const novoTexto = "varal";
function imprimeInversao(novoTexto) {
    let resultado = inverterTexto(novoTexto);
    return resultado;
}
imprimeInversao(novoTexto);
//descobrindo se uma palavra é um plindromo
const textoEhPalindromo = "varal";
function ehPalindromo(textoEhPalindromo) {
    let novoResultado = ``;
    const textoPalindromo = imprimeInversao(textoEhPalindromo);
    if (textoEhPalindromo == textoPalindromo) {
        novoResultado = `${textoEhPalindromo} é um palindromo`;
        console.log(novoResultado);
    }
    else {
        novoResultado = `${textoEhPalindromo} não é um palindromo `;
        console.log(novoResultado);
    }
    return novoResultado;
}
ehPalindromo(textoEhPalindromo);
