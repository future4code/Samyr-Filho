// Esxercícios de Interpretação de código

// Exercício 1
// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map(
//      (item, index, array) => {
//          console.log(item, index, array)
//      }
//  )
// Vai ser impresso 3 linhas com os objetos do array "usuarios" mais os índices respectivos e
// o array original
// ********************************************

// Exercício 2

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)
// Será impresso um novo array composto dos valores da propriedade "nome" do array original
// ********************************************

// Exercício 3

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)
// Será impresso um novo array composto dos elementos do array original
// que não tenha o apelido "Chijo"
// ********************************************

// Exercícios de escrita de código

// Exercício 1
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 // a) Crie um novo array que contenha apenas o nome dos doguinhos
 /*
 const nomesDosPet = pets.map((pet) => {
     return pet.nome
 })
console.log(nomesDosPet)
*/
// b) Crie um novo array apenas com os cachorros salsicha
/*
const petSalsicha = pets.filter((pet) => {
    return pet.raca === 'Salsicha'
})
console.log(petSalsicha)
*/
// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes 
// que são poodles. A mensagem deve ser: 
// "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"
/*
const clientesPoodles = pets.filter((pet) => {
    return pet.raca === 'Poodle'
})
const mensagemDescontoPoodles = clientesPoodles.map((pet) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${pet.nome}!`
})
console.log(mensagemDescontoPoodles)
// ********************************************
*/
// Exercício 2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]
 // a) Crie um novo array que contenha apenas o nome de cada item
/* 
 const nomes = produtos.map((produto) => {
     return produto.nome
 })
 console.log(nomes)
 */
// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, 
// aplicando 5% de desconto em todos eles
/*
const nomePreco = produtos.map((produto) => {
    return {nome: produto.nome, preco: Math.round(produto.preco * 95)/100}
})
console.log(nomePreco)
*/
// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
/*
const categoriaBebidas = produtos.filter((produto) => {
    return produto.categoria === 'Bebidas'
})
console.log(categoriaBebidas)
*/
// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"
/*
const produtosYpe = produtos.filter((produto) => {
    return produto.nome.includes('Ypê')
})
console.log(produtosYpe)
*/
// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
// Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"
/*
const produtosYpe = produtos.filter((produto) => {
    return produto.nome.includes('Ypê')
})
const promocaoYpe = produtosYpe.map((produto) => {
    return `Compre ${produto.nome} por R$ ${produto.preco.toFixed(2)}`
})
console.log(promocaoYpe)
*/
// ********************************************

// Desafios

// Desafio 1
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]
// a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética
/*
const pokesOrenadosNome = pokemons.sort(function (a, b) {
    if (a.nome > b.nome){
        return 1
    } else if (a.nome < b.nome){
        return -1
    } else {
        return 0
    }
})
console.log(pokesOrenadosNome)
*/
// b) Crie um novo array apenas com os tipos dos pokémons, sem repetição
const tipoPokes = []
if (pokemons.length > 0) {
    tipoPokes.push(pokemons[0].tipo)
    for (let i = 1; i < pokemons.length; i++){
        if (pokemons[i - 1].tipo !== pokemons[i].tipo){
            tipoPokes.push(pokemons[i].tipo)
        }
    }
    console.log(tipoPokes)
}

// ********************************************
