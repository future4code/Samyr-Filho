// Interpretação de código
// Exercício 1

// let array
// console.log('a. ', array)  
//  Será impresso "a. undefined"

// array = null
// console.log('b. ', array)
// Será impresso "b. null"

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)
// Será impresso "c. 11"

// let i = 0
// console.log('d. ', array[i])
// Será impresso "d. 0"

// array[i+1] = 19
// console.log('e. ', array)
// Será impresso "e. [3, 19, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]"

// const valor = array[i+6]
// console.log('f. ', valor)
// Será impresso "f. 9"
// *************************************

// Exercício 2

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)
// "Subi num ônibus em Marrocos"
// Será impresso "SUBI NUM ÔNIBUS EM MIRROCOS 27" 
// *************************************

// Escrita de código
// Exercício 1
const nomeDoUsuario = prompt('Informe seu nome')
const emailDoUsuario = prompt('Informe seu e-mail')
console.log(`O e-mail ${emailDoUsuario.trim()} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}`)
// *************************************

// Exercício 2
const comidaPreferida = ['Meche de Folha de Uva', 'Merche de Repolho', 'Risoto de Camarão', 'Strogonof de Camarão', 'Muqueca de Peixe']
console.log(comidaPreferida)
console.log(`Essas são as minhas comidas preferidas: 
${comidaPreferida[0]};
${comidaPreferida[1]};
${comidaPreferida[2]};
${comidaPreferida[3]};
${comidaPreferida[4]}.`)
let comidaDoUsuario = prompt('Qual a sua comida preferida?')
comidaPreferida[1] = comidaDoUsuario
console.log(comidaPreferida)
// *************************************

// Exercício 3
let listaDeTarefas = [prompt('Informe sua primeira tarefa!')]
listaDeTarefas.push(prompt('Informe sua segunda tarefa!'))
listaDeTarefas.push(prompt('Informe sua terceira tarefa!'))
console.log(listaDeTarefas)
const indice = Number(prompt('Informe a tarefa que já realizaou (0, 1 ou 2)!'))
listaDeTarefas.splice(indice, 1)
console.log(listaDeTarefas)
// *************************************


// Desafios

// Desafio 1
const frase = prompt('informe uma frase!')
const palavras = frase.split(" ")
console.log(palavras)
// *************************************

// Desafio 2
const listaFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
console.log(listaFrutas.indexOf('Abacaxi'))
console.log(listaFrutas.length)
// *************************************


