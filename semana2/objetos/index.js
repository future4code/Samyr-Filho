// Execícios de interpretação
// Exercício 1

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// "Matheus Nachtergaele"
// "Virginia Cavendish"
// "canal: Globo"
// horario: "14h"
// **************************************************

// Exercício 2

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)


// a) O que vai ser impresso no console?
// nome: "Juca"
// idade: 3
// raca: "SRD"

// nome: "Juba"
// idade: 3
// raca: "SRD"

// nome: "Jubo"
// idade: 3
// raca: "SRD"

// b) O que faz a sintaxe dos três pontos antes do nome de um objeto?
// Ele copia o objeto para a variável 
// **************************************************

// Exercício 3

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console?
// false
// underfined

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// false - porque o console passa o objeto 'pessoa' e a propriedade 'backender' para a função
// 'minhaFuncao' que por sua vez retorna a o conteúdo da propriedade do objeto passado no 
// parametro, no caso a 'backender' que é false
// underfined - porque a propriedade 'altura' não foi declarada no objeto 'pessoa'
// **************************************************

// Exercícios de escrita de código

// Exercício 1
// Item A

/*
const pessoa = {
	nome: "Amanda", 
	apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }
const minhaFuncao = (umaPessoa) => {
	console.log(`Eu sou ${umaPessoa.nome}, mas pode me chamar de: ${umaPessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${umaPessoa.apelidos[2]}.`)
} 
minhaFuncao(pessoa)

// Item B
const pessoa1 = {...pessoa, apelidos: ['Amandinhazinha', 'Mandinhazinha', 'Mandinzinha']}

minhaFuncao(pessoa1)
// **************************************************
*/
//Exercício 2
/*
const pessoa1 = {
	nome: 'Amanda',
	idade: 33,
	profissao: 'Professora'
}
const pessoa2 = {pessoa1, nome: 'Letícia', idade: 35, profissao: 'Desenvolvedora'}

const minhaFuncao = (umaPessoa) => {
	return [umaPessoa.nome, umaPessoa.nome.length, umaPessoa.idade, umaPessoa.profissao, umaPessoa.profissao.length]	
}
// **************************************************
*/

// Exercício 3
/*
const carrinho = []
const banana = {
	nome : 'Banana',
	disponibilidade : true
}

const mamao = {...banana, nome: 'Mamão'}
const maca = {...banana, nome: 'Maçã'}

const compra = (fruta) => {
	carrinho.push(fruta)
}
compra(banana)
compra(mamao)
compra(maca)
console.log(carrinho)
// **************************************************
*/
// Desafios
/*
// Desafio 1
const informesUsuario = () => {
	const nome = prompt('Qual o seu nome?')
	const idade = Number(prompt('Qual a sua idade?'))
	const profissao = prompt('Qual a sua profissão?')
	
	const dadosUsuarios = {
		nome: nome,
		idade: idade,
		profissao: profissao
	}
	console.log(dadosUsuarios)
	console.log(typeof(dadosUsuarios))
}
informesUsuario()
// **************************************************
*/
// Desafio 2
/*
const filmeRambo = {
	nome: 'Rambo',
	anoLancamento: 1982
}
const filmeStallone = {...filmeRambo, nome: 'Stallone Cobra', anoLancamento: 1986}
const comparaFilmes = (filme1, filme2) => {
	return `O primeiro filme foi lançado antes do segundo? ${filme1.anoLancamento < filme2.anoLancamento}
	O primeiro filme foi lançado no mesmo ano do segundo? ${filme1.anoLancamento === filme2.anoLancamento}`
}
// **************************************************
*/

// Desafio 3
/*
const controleEstoqueSacolao = (umaFruta) => {
	umaFruta.disponibilidade = !umaFruta.disponibilidade
	return umaFruta
}
// **************************************************
*/