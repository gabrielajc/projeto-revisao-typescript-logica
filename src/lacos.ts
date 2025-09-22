export function contagemVogais(textoCapturado: string): number{
const vogais = "aeiou"
let novoContador: number = 0
for (
  let indiceLetras: number = 0;
  indiceLetras < textoCapturado.length; indiceLetras++
) {
  const letraAtual = textoCapturado[indiceLetras]
  if(vogais.includes(letraAtual)){
    novoContador++
  }
}
return novoContador
}


export function inverterTexto(textoInverter: string): string {
  let textoInvertido = "";
  for (
    let segundoIndice: number = 0;
    segundoIndice < textoInverter.length;
    segundoIndice++
  ) {
    textoInvertido += textoInverter[textoInverter.length - 1 - segundoIndice];
  }
  console.log(textoInvertido);
  return textoInvertido;
}


export function ehPalindromo(textoEhPalindromo: string): string {
let resultadoPalindromo: string = ``;
const textoPalindromo: string = inverterTexto(textoEhPalindromo)
if (textoEhPalindromo == textoPalindromo) {
  resultadoPalindromo = `${textoEhPalindromo} é um palindromo`;
  console.log(resultadoPalindromo);
} else {
  resultadoPalindromo = `${textoEhPalindromo} não é um palindromo `;
  console.log(resultadoPalindromo);
}
return resultadoPalindromo;
}
