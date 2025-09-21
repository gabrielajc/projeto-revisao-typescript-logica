"use strict";
//Contando quantas vogais tem a letra
const textoLetras = "maria";
const vogais = "aeiou";
let novoContador = 0;
for (let indiceLetras = 0; indiceLetras < textoLetras.length; indiceLetras++) {
    const letraAtual = textoLetras[indiceLetras];
    if (vogais.includes(letraAtual)) {
        novoContador++;
    }
}
console.log(novoContador);
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
