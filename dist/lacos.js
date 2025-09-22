export function contagemVogais(textoCapturado) {
    const vogais = "aeiou";
    let novoContador = 0;
    for (let indiceLetras = 0; indiceLetras < textoCapturado.length; indiceLetras++) {
        const letraAtual = textoCapturado[indiceLetras];
        if (vogais.includes(letraAtual)) {
            novoContador++;
        }
    }
    return novoContador;
}
export function inverterTexto(textoInverter) {
    let textoInvertido = "";
    for (let segundoIndice = 0; segundoIndice < textoInverter.length; segundoIndice++) {
        textoInvertido += textoInverter[textoInverter.length - 1 - segundoIndice];
    }
    console.log(textoInvertido);
    return textoInvertido;
}
export function ehPalindromo(textoEhPalindromo) {
    let resultadoPalindromo = ``;
    const textoPalindromo = inverterTexto(textoEhPalindromo);
    if (textoEhPalindromo == textoPalindromo) {
        resultadoPalindromo = `${textoEhPalindromo} é um palindromo`;
        console.log(resultadoPalindromo);
    }
    else {
        resultadoPalindromo = `${textoEhPalindromo} não é um palindromo `;
        console.log(resultadoPalindromo);
    }
    return resultadoPalindromo;
}
