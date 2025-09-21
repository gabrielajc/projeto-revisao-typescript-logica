//imprimindo cada letra de uma palavra

// const texto = "arara"
// for (i = 0 ; i <= texto.length ; i++) {
//     console.log(texto[i])
// }

//imprimindo cada letra de uma palavra ao contrário

// const texto = "varal"
// let textoInvertido = ''
// for (i = 0 ; i < texto.length ; i++) {
//   textoInvertido += texto[texto.length - 1 - i]
 
// }   console.log(textoInvertido)

//descobrindo se uma palavra é um plindromo

const texto = "varal"
const texto2 = "arara"
let textoInvertido = ''
for (i = 0 ; i < texto2.length ; i++) {
  textoInvertido += texto2[texto2.length - 1 - i]
}   if (textoInvertido == texto2){
  console.log(`${texto2} é um palindromo`)
} else {console.log(`${texto2} não é um plindromo `)}

