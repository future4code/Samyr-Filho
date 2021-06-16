// Interpretação de código
// Exercício 1
//
// a. false
// b. false
// c. true
// d. boolean
// ************************
// 
// Exercício 2 
// O problema é que estão sendo atribuídos valores Strings e por isso a variável soma não condiz
// com a soma de valores numéricos e o resultado vais ser um valor que não corresponde a soma 
// deles
// ************************
// 
// Exercício 3
// Basta fazer um cash no comando prompt como a seguir
// 
// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))
// 
// const soma = primeiroNumero + segundoNumero
// 
// console.log(soma)
// ************************

// Escrita de código
/*
// Exercício 1
const idadeUsuario = Number(prompt('Qual a sua idade?'))
const idadeMelhorAmigo = Number(prompt('Qual a idade do(a) seu(ua) melhor amigo(a)?'))
console.log('Sua idade é maior do que a do(a) seu(ua) melhor amigao(a)?', idadeUsuario > idadeMelhorAmigo)
console.log('A diferença de idade sua e de seu(ua) melhor amigo(a) é:', idadeUsuario - idadeMelhorAmigo)
// ************************

// Exercício 2
const numeroPar = Number(prompt('Digite um número par.'))
console.log('O resto é:', numeroPar % 2)
// Ao fazermos o resto de 2 em um número par, o resultado é sempre 0. Já para o impar o resultado é sempre 1 
// ************************

// Exercício 3
const idadeUsuario = Number(prompt('Qual a sua idade?'))
const idadeMeses = 55 * 12
const idadeDias = idadeMeses * 30
console.log('Sua idade em meses é:', idadeMeses)
console.log('Sua idade em dias é:', idadeDias)
console.log('Sua idade em horas é:', idadeDias * 24)
// ************************

// Exercício 4
const primeiroNumero = Number(prompt('Informe o primeiro número.'))
const segundoNumero = Number(prompt('Informe o segundo número.'))

console.log('O primeiro numero é maior que segundo?', primeiroNumero > segundoNumero)
console.log('O primeiro numero é igual ao segundo?', primeiroNumero === segundoNumero)
console.log('O primeiro numero é divisível pelo segundo?', (primeiroNumero % segundoNumero) === 0)
console.log('O segundo numero é divisível pelo primeiro?', (segundoNumero % primeiroNumero) === 0)
// ************************


// Desafio
// Exercício 1

//(KELVIN) = (GRAUS_FAHRENHEIT - 32)*(5/9) + 273.15
//(GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

// item a
let temperaturaF = 77
let temperaturaK = (temperaturaF - 32) * (5/9) + 273.15
console.log(temperaturaF, '°F convertido para Kelvin é', temperaturaK)

// item b
let temperaturaC = 80
temperaturaF = (temperaturaC * (9/5)) + 32
console.log(temperaturaC, '°C convertido para °F é', temperaturaF)

// item c
temperaturaC = 30
temperaturaF = (temperaturaC * (9/5)) + 32
temperaturaK = (temperaturaF - 32) * (5/9) + 273.15
console.log(temperaturaC, '°C convertido para °F é', temperaturaF, 'e em K é', temperaturaK)

// item d
temperaturaC = Number(prompt('Informe o grau Celsius(°C)'))
temperaturaF = (temperaturaC * (9/5)) + 32
temperaturaK = (temperaturaF - 32) * (5/9) + 273.15
console.log(temperaturaC, '°C convertido para °F é', temperaturaF, 'e em K é', temperaturaK)

// Exercício 2
// item a
let consumo = Number(prompt('Informe o consumo em quilowatts'))
const valorQuiloWattHora = 0.05
let valorASerPago = valorQuiloWattHora * (consumo / (24 * 30))
console.log('O valor a ser pago para um consumo de ', consumo, ' KWts é R$', valorASerPago)

consumo = 280
 valorASerPago = valorQuiloWattHora * consumo
console.log('O valor a ser pago para um consumo de ', consumo, 'KWts-Hr é R$', valorASerPago)

//item b
 const desconto = 15
 console.log('O valor a ser pago para um consumo de ', consumo, 'KWts-Hr com desconto de', desconto, '% é R$', valorASerPago * (1 - (desconto / 100)))
 */
// Exercício 3
// item a
// 1 lb = 0,453592 Kg
let valor = 20
let indice = 0.453592
console.log(valor, "lb equivale a", valor * indice, 'Kg')

// item b
// 1 oz = 0,0283495 Kg
valor = 10.5
indice = 0.0283495
console.log(valor, "oz equivale a", valor * indice, 'Kg')

// item c
// i milha = 1609,34 metros
valor = 100
indice = 1609.34
console.log(valor, "mi equivale a", valor * indice, 'm')

// item d
// 1 ft = 0,3048 metros
valor = 50
indice = 0.3048
console.log(valor, "ft equivale a", valor * indice, 'm')

// item e
// 1 gl = 3,78541 litros
valor = 103.56
indice = 3.78541
console.log(valor, "gl equivale a", valor * indice, 'l')

// item f
// 1 xicara = 1/6 litros
valor = 450
indice = 1/6
console.log(valor, "xic equivale a", valor * indice, 'l')

// item g
valor = Number(prompt('Informe o numero de xícaras à converter para litros'))
indice = 1/6
console.log(valor, "xic equivale a", valor * indice, 'l')



