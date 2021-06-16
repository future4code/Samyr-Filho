// Interpretação de código
// Exercício 1
// 10
// 10 5
// ******************

// Exercício 2
// 20 10 10
// ******************

// Exercício 3
// p => horasTraballhadasDia
// t => valorPorDia
// ******************

// Escrita de código
// Exercício 1

/*
let nome
let idade

console.log('Tipo da vairável "nome": ', typeof(nome))
console.log('Tipo da vairável "Idade": ', typeof(idade))
// será impresso undefined pois não houve uma atribuição de valor e 
// consequentemente sem definição do tipo


prompt('Informe seu nome:', nome)
prompt('Informe sua idade: ', idade)

console.log('Tipo da vairável "nome": ', typeof(nome))
console.log('Tipo da vairável "Idade": ', typeof(idade))

// O impresso sai com o mesmo valor (underfined) pois não houve definição na declaração da variável

let novoNome = prompt('Informe seu nome:')
let novaIdade = prompt('Informe sua idade: ')
console.log('Olá', novoNome, ', você tem', novaIdade, ' anos')
// ******************

//Exercício 2

let Lanchou = prompt('Você lanchou hoje? (Sim ou Não)')
let almocou = prompt('Você já almoçou? (Sim ou Não)')
let cafezinho = prompt('Tomou seu cafezinho? (Sim ou Não)')

console.log('Você lanchou hoje? -', Lanchou)
console.log('Você já almoçou? -', almocou)
console.log('Você tomou seu cafezinho? -', cafezinho)
// ******************

//Exercício 3

let a = 10
let b = 25
let c = a
a = b
b = c

console.log('O novo valor de a é:', a)
console.log('O novo valor de b é:', b)

let valorA = prompt('Digite o primeiro valor(a)')
let valorB = prompt('Digite o segundo valor(b)')

let valorC = valorA
valorA = valorB
valorB = valorC

console.log('O novo valor de a é', valorA)
console.log('O novo valor de b é', valorB)
// ******************
*/
// Desafio

let valorA = Number(prompt('Digite o primeiro valor(a)'))
let valorB = Number(prompt('Digite o segundo valor(b)'))

let soma = valorA + valorB
let multipplicacao = valorA * valorB

console.log('O valor da soma é', soma)
console.log('O valor da multiplicação é', multipplicacao)
// ******************