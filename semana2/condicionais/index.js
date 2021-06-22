// Exercícios de interpretação de código

// Exercício 1
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) - Declara uma variavel const atribuindo um valor vindo do prompt
//    - Declara outra variavel atribuindo o valor da primeira transformando-a em numérica
//    - verifica se a variavel "numero" é divisivel por dois e se for, imprime no console
//      a mensagem "Passou no teste.". Se não imprime no console a mensagem "Não passou no teste.".

// b) Números divisíveis por 2.

// c) Números não divisíveis por 2
// ****************************************************

// Exercício 2

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Serve para solicitar que o usuário digite uma fruta e imprime no console a fruta que 
//    foi digitada juntamente com o seu preço.

// b) "O preço da fruta maçã é R$ 2.25"

// c) "O preço da fruta Pêra é R$ 5.5"
// ****************************************************

// Exercício 3

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) Está declarando uma variável const pegando o que foi digitado no prompt e transformando-o
//    no tipo numérico

// b) - Para a digitação "10" ele imprime no console as mensagem "Esse número passou no teste" e
//      declara uma variável mensagem atribuindo o valor "Esse número passou no teste".
//    - Para a digitação "-10" ele imprime no console "Underfined"

// c) Nota-se que há um erro na declaração da variável mensagem. Para ser impresso no console o
//    valor nela declarado, deveria estar fora do escopo do if. Se a intenção do código for
//    imprimir no console "Esse número passou no teste" para números maiores que 0 e imprimir
//    no console "Essa mensagem é secreta!!!" para números menores e iguais a 0, deveria ter um 
//    else e nele ser declarada a variável mensagem.
// ****************************************************

// Exercícios de escrita de código

// Exercício 1
/*
const idade = Number(prompt('Informe sua idade:'))
if (idade >= 18) {
  console.log('Você pode dirigir')
  }
  else {
    console.log('Você não pode dirigir')
  }
// ****************************************************
*/
// Exercício 2
/*
const turno = prompt('Informe de qual turno você é M (matutino) ou V (Vespertino) ou N (Noturno)?')
const turnoDigitado = turno.toLocaleUpperCase()
if (turnoDigitado === 'M') {
  console.log('Bom dia!')
} else if (turnoDigitado === 'V') {
  console.log('Boa tarde!')
} else if (turnoDigitado === 'N') {
  console.log('Boa noite!')
} else {
  console.log('Não compreendo!')
}
// ****************************************************
*/
// Exercício 3
/*
const turno = prompt('Informe de qual turno você é M (matutino) ou V (Vespertino) ou N (Noturno)?')
const turnoDigitado = turno.toLocaleUpperCase()
switch (turnoDigitado) {
  case 'M':
    console.log('Bom dia!')
    break
  case 'V':
    console.log('Boa tarde!')
    break
  case 'N':
    console.log('Boa noite!')
    break
  default:
    console.log('Não compreendo!')
}
// ****************************************************
*/
// Exercício 4
/*
const generoBom = 'fantasia'
const precoBom = 15

const generoInformado = prompt('Informe o gênero do filme que irão assistir?')
const precoInformado = Number(prompt('Informe o preço do ingresso?'))

const ehBomFilme = generoInformado.toLowerCase() === generoBom.toLowerCase()
const ehBomPreco = precoInformado < precoBom

if (ehBomFilme && ehBomPreco) {
  console.log('Bom filme!')
} else {
  console.log('Escolha outro filme :(')
}
*/
// ****************************************************

// Desafios

// Desafio 1
/*
const generoBom = 'fantasia'
const precoBom = 15

const generoInformado = prompt('Informe o gênero do filme que irão assistir?')
const precoInformado = Number(prompt('Informe o preço do ingresso?'))

const ehBomFilme = generoInformado.toLowerCase() === generoBom.toLowerCase()
const ehBomPreco = precoInformado < precoBom

const qualLanche = () => {
  return prompt('Qual o lanche vai querer comprar  (pipoca, chocolate, doces, etc)?')
}

if (ehBomFilme && ehBomPreco) {
  const lanche = qualLanche()
  console.log('Bom filme!')
  console.log(`Aproveite o seu ${lanche}`)
} else {
  console.log('Escolha outro filme :(')
}
// ****************************************************
*/
// Desafio 2
const nomeUsuario = prompt('Informe o seu nome:')
const tipoJogoUsuario = prompt('Informe o tipo do jogo que vai assistir (IN - Internacional ou DO - Domestico)?')
const etapaJodoUsuario = prompt('Informe qual a etapa do jogo que vai assistir (SF - Semi-final, DT - Decisão 3º lugar ou FI Final)?')
const categoriaUsuario = Number(prompt('Informe a categoria (1, 2, 3 ou 4)?'))
const quantIngressoUsuario = Number(prompt('Informe a quantidade de ingressos?'))

const ingresso = {
  tipoJogo: tipoJogoUsuario,
  etapaJogo: etapaJodoUsuario,
  categoria: categoriaUsuario
}

const ingressosComprados = {...ingresso, comprador: nomeUsuario, quantidade: quantIngressoUsuario}

const tipoJogoSelecionado = (tipo) => {
  if (tipo.toUpperCase() === 'DO'){
    return 'Domestico'
  } else if (tipo.toUpperCase() === 'IN'){
    return 'Internacional'
  }
}
const etapaSelecionada = (etapa) => {
  switch (etapa.toUpperCase()){
    case 'SF':
      return 'Semi-Final'
    case 'DT':
      return 'Decisão 3º lugar'
    case 'FI':
      return 'Final'
    default:
      return 'Não definida'
  }
}

const valorIngressoDomestico = (etapaJogo, categoriaJogo) => {
  const valorSF = (categoria) => {
    switch (categoria) {
      case 1: return 1320
      case 2: return 880
      case 3: return 550
      case 4: return 220
      default: return 0
    }
  }
  const valorDT = (categoria) => {
      switch (categoria) {
        case 1: return 660
        case 2: return 440
        case 3: return 330
        case 4: return 170
        default: return 0
      }
    }

  const valorFI = (categoria) => {
      switch (categoria) {
        case 1: return 1980
        case 2: return 1320
        case 3: return 880
        case 4: return 330
        default: return 0
      }
    }
 
  if (etapaJogo.toUpperCase() === 'SF'){
    return valorSF(categoriaJogo)
  } else if (etapaJogo.toUpperCase() === 'DT'){
    return valorDT(categoriaJogo)
  } else if (etapaJogo.toUpperCase() === 'FI'){
    return valorFI(categoriaJogo)
  }
    
} 
const valorIngressoSelecionado = (umIngresso) => {
  if (umIngresso.tipoJogo.toUpperCase() === 'DO'){
    return  valorIngressoDomestico(umIngresso.etapaJogo, umIngresso.categoria)
  } else if (umIngresso.tipoJogo.toUpperCase() === 'IN'){
    return  valorIngressoDomestico(umIngresso.etapaJogo, umIngresso.categoria) / 4.1
  } else {
    return 0
  }
}

  console.log(`---Dados da compra---
  Nome do cliente: ${ingressosComprados.comprador}
  Tipo do jogo: ${tipoJogoSelecionado(ingressosComprados.tipoJogo)}
  Etapa do jogo: ${etapaSelecionada(ingressosComprados.etapaJogo)}
  Categoria: ${ingressosComprados.categoria}
  Quantidade de Ingressos: ${ingressosComprados.quantidade}
  ---Valores---
  Valor do ingresso: ${valorIngressoSelecionado(ingressosComprados)}
  Valor toral: ${valorIngressoSelecionado(ingressosComprados) * ingressosComprados.quantidade}`)
// ****************************************************

