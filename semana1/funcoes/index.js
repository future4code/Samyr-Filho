// Interpretação de código
// Exercício 1

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))
//
// a) "10" e "50" 
// b) Não aparecia nada pois não há comando para o console e os valores retornados seriam perdidos
// *********************************************
// Exercício 2

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a) A função transforma o texto passado como parâmetro em caixa alta e verifica se
//    existe a string "cenoura" e retorna true (se existir) e false (se não existir)
//    A utilidade é justamente verificar se o texto passado no pârametro contém a
//    string "cenoura"

//   bi) true
//  bii) true
// biii) true 
// *********************************************

// Escrita de código
// Exercício 1

// a)
// function informacoesSobreMim () {
//     const nome = 'Samyr'
//     const idade = 55
//     const cidade = 'Campos dos Goytacazes'
//     const profissao = 'Engenheiro Civil'
//     console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`)
// }

// informacoesSobreMim()

// b)
// let informacoesUsuario = (nome, idade, cidade, profissao) => {
    
//     return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`
// }

// suasInformacoes = informacoesUsuario('Laís', 23, 'São Paulo', 'instrutora')
// console.log(suasInformacoes)
// *********************************************

// Execício 2
// a)
// let somaDoisNumeros = (numero1, numero2) => {
//     return numero1 + numero2
// }

// const numero1Usuario = Number(prompt('Digite o primeiro número:'))
// const numero2Usuario = Number(prompt('Digite o segundo número:'))
// console.log(`O resultado da soma dos dois números informados é: ${somaDoisNumeros(numero1Usuario, numero2Usuario)}`)
//
// b)
// let Num1MaiorIgualNum2 = (numero1, numero2) => {
//     return numero1 >= numero2
// }

// const numero1Usuario = Number(prompt('Digite o primeiro número:'))
// const numero2Usuario = Number(prompt('Digite o segundo número:'))
// console.log(`O primeiro número é maior ou igual ao segundo: ${Num1MaiorIgualNum2(numero1Usuario, numero2Usuario)}`)

// c)
// let ehNumeroPar = (numero) => {
//     return (numero % 2) === 0
// }

// const numero1Usuario = Number(prompt('Digite um número:'))

// console.log(`O número é par ? ${ehNumeroPar(numero1Usuario)}`)

// d)
// const tamanhoCaixaAlta = (texto) => {
//     const nrCaracteres = texto.length
//     const caixaAlta = texto.toUpperCase()

//     console.log(`O texto tem ${nrCaracteres} caracteres. Em caixa alta fica ${caixaAlta}.`)
//     // console.log('O texto tem ' + nrCaracteres + '  caracteres. Em caixa alta ' + caixaAlta + '.')
// }

// tamanhoCaixaAlta("Samyr")
// *********************************************

// Exercício 3
// const somaDoisNumeros = (numero1, numero2) => {
//         return numero1 + numero2
//     }

// const diferencaDoisNumeros = (numero1, numero2) => {
//         return numero1 - numero2
//     }

// const multiplicacaoDoisNumeros = (numero1, numero2) => {
//         return numero1 * numero2
//     }

// const divisaoDoisNumeros = (numero1, numero2) => {
//         return numero1 / numero2
//     }

// const numero1Usuario = Number(prompt('Digite o primeiro número:'))
// const numero2Usuario = Number(prompt('Digite o segundo número:'))

// console.log(`Os números inseridos: ${numero1Usuario} e ${numero2Usuario}
// Soma: ${somaDoisNumeros(numero1Usuario, numero2Usuario)}
// Diferença: ${diferencaDoisNumeros(numero1Usuario, numero2Usuario)}
// Multiplicação: ${multiplicacaoDoisNumeros(numero1Usuario, numero2Usuario)}
// Divisão: ${divisaoDoisNumeros(numero1Usuario, numero2Usuario)}`)
// *********************************************

// Desafios

// Desafio 1
// const imprime = (parametro) => {
//     console.log(parametro)
// }

// const somaDoisValores = (valor1, valor2) => {
//     imprime(valor1 + valor2)
// }
// const numero1Usuario = Number(prompt('Digite o primeiro número:'))
// const numero2Usuario = Number(prompt('Digite o segundo número:'))

// somaDoisValores(numero1Usuario, numero2Usuario)
// *********************************************

// Desafio 2
// const quadradoValor = (valor) => {
//     return valor * valor
// }

// const raizValor = (valor) => {
//     return Math.sqrt(valor)
// }

// const calculaHipotenusa = (cateto1, cateto2) => {
//     const hipotenusa = raizValor(quadradoValor(cateto1) + quadradoValor(cateto2))
//     return hipotenusa
// }

// const ladoCateto1 = Number(prompt('Digite um cateto do triangulo:'))
// const ladoCateto2 = Number(prompt('Digite o outro cateto do triangulo:'))

// console.log(`A hipotenusa do triangulo cujos catetos são ${ladoCateto1} e ${ladoCateto2} é ${calculaHipotenusa(ladoCateto1, ladoCateto2)}`)
// *********************************************
