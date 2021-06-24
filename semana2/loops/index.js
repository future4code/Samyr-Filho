// Exercícios de interpretação de códigos

// Exercício 1

// let valor = 0
// for (let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)
// Está fazendo um loop acrescentando à variável "valor" o valor de "i" que é incrementado de 1
// Vai ser impresso 10
// *************************************************

// Exercício 2

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// a) Será impresso: 19 
//                   21 
//                   23 
//                   25 
//                   27 
//                   30
// b) Sim, modificando o comando console para "console.log(lista.indexOf(numero))"
// *************************************************

// Exercício 3

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < (quantidadeAtual + 1); asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
// Será impresso : *
//                 **
//                 ***
//                 ****
// *************************************************

// Exercícios de escrita de código

// Exercício 1
/*
const listaBichinhos = []
const qtdBichinhos = Number(prompt('Quantos bichinhos você tem?'))
if (qtdBichinhos > 0){
    let nomeBichinho = ''
    while (nomeBichinho.toUpperCase() !== 'FIM'){
        nomeBichinho = prompt('Qual(is) o(s) nome(s) dele(s)? (FIM para terminar)')
        if (nomeBichinho.toUpperCase() !== 'FIM'){
            listaBichinhos.push(nomeBichinho)
        }
    }
    console.log(listaBichinhos)
} else{
    console.log('Que pena! Você pode adotar um pet!')
}
// *************************************************
*/
// Exercício 2

// a)
/*
const  valoresArray = (arrayOriginal) => {
    for (let numero of arrayOriginal){
        console.log(numero)
    }
}
valoresArray([23, 76, 12, 99, 44])
*/
// b)
/*
const  valoresArrayDiv10 = (arrayOriginal) => {
    for (let numero of arrayOriginal){
        console.log(numero / 10)
    }
}
valoresArray([23, 76, 12, 99, 44])
*/
// c)
/*
const  valoresArray = (arrayOriginal) => {
    const novoArray = []
    for (let numero of arrayOriginal){
        if(numero % 2 === 0){
            novoArray.push(numero)
        }
    }
    console.log(novoArray)
}
valoresArray([23, 76, 12, 99, 44])
*/
// d)
/*
const  valoresArray = (arrayOriginal) => {
    const novoArray = []
    for (let numero of arrayOriginal){
        let indice = arrayOriginal.indexOf(numero)
        novoArray.push(`O elemento do índice ${indice} é numero ${numero}`)
    }
    console.log(novoArray)
}
valoresArray([23, 76, 12, 99, 44])
*/
// e)
/*
const  valoresArray = (arrayOriginal) => {
    let maior = -Infinity
    let menor = +Infinity
    // let maior = 0
    // let menor = 0
    for (let numero of arrayOriginal){
        if(numero > maior){
            maior = numero
        }
        if(numero < menor){
            menor = numero
        }
    }
    return `O maior número é ${maior} e o menor é ${menor}`  
}
console.log(valoresArray([80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]))
*/
// *************************************************

// Desafios

// Exercício 1
/*
const numeroEscondido = Number(prompt('Digite um número (maior que 0) para ser adivinhado?'))
console.log('Vamos jogar!')
let numeroChutado = -1
let numeroTentativas = 0
while ((numeroChutado !== numeroEscondido) && (numeroChutado !== 0))  {
    numeroChutado = Number(prompt('Adivinhe qual o número escondido?("0" para desistir)'))
    console.log(`O numero chutado foi: ${numeroChutado}`)
    numeroTentativas ++
    if(numeroChutado === 0){
        console.log(`Desistiu. Você não sabe nada!!!`)
        console.log(`O número de tentativas foi: ${numeroTentativas - 1}`)
    } else if(numeroEscondido < numeroChutado){

        console.log(`Errrrrrrou, o número escondido é menor`)
    } else if(numeroEscondido > numeroChutado){

        console.log(`Errrrrrrou, o número escondido é maior`)
    } else if(numeroChutado = numeroEscondido){

        console.log(`Acertou!!`)
        console.log(`O número de tentativas foi: ${numeroTentativas}`)
    }
}
*/
// *************************************************

// Exercício 2

// const geraNumeroInteiro = (primeiroNumero, segundoNumero) => {
//     const numeroGerado = Math.floor(Math.random() * (segundoNumero - primeiroNumero + 1) + primeiroNumero)
//     return numeroGerado
// }

// const numeroEscondido = geraNumeroInteiro(1, 100)
// console.log('Vamos jogar!')
// let numeroChutado = -1
// let numeroTentativas = 0
// while ((numeroChutado !== numeroEscondido) && (numeroChutado !== 0))  {
//     numeroChutado = Number(prompt('Adivinhe qual o número escondido?("0" para desistir)'))
//     console.log(`O numero chutado foi: ${numeroChutado}`)
//     numeroTentativas ++
//     if(numeroChutado === 0){
//         console.log(`Desistiu. Você não sabe nada!!!`)
//         console.log(`O número de tentativas foi: ${numeroTentativas - 1}`)
//     } else if(numeroEscondido < numeroChutado){

//         console.log(`Errrrrrrou, o número escondido é menor`)
//     } else if(numeroEscondido > numeroChutado){

//         console.log(`Errrrrrrou, o número escondido é maior`)
//     } else if(numeroChutado = numeroEscondido){

//         console.log(`Acertou!!`)
//         console.log(`O número de tentativas foi: ${numeroTentativas}`)
//     }
// }
// Na minha opnião foi fácil. O que pode melhorar nesse código é a captura do valor para a 
// desistência. Ao invés do número 0 ser um vazio caso não seja digitado nada.
// *************************************************



