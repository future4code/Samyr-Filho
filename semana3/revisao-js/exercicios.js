// EXERCÍCIO 01
function inverteArray(array) {
  let novoArray = []
  const numReg = array.length
  for(i = numReg - 1; i >= 0; i = i - 1){
    novoArray.push(array[i])
  }
  return novoArray
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  let numerosPares = array.filter((numero) => {
    if (numero % 2 === 0){
      return numero
    }
  })
  return numerosPares.map((numero) => {
    return numero * numero
  })
}

// EXERCÍCIO 03
function retornaNumerosPares(array) {
  let numerosPares = array.filter((numero) => {
    if (numero % 2 === 0){
      return numero
    }
  })
  return numerosPares
}

// EXERCÍCIO 04
function retornaMaiorNumero(array) {
  let maiorNumero = 0
  for (let numero of array){
    if (maiorNumero < numero) {
      maiorNumero = numero
    }
  }
  return maiorNumero   
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  return array.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3
  
  const arrayResposta = []
  arrayResposta.push(booleano1 && booleano2 && !booleano4)
  arrayResposta.push((booleano1 && booleano2) || !booleano3)
  arrayResposta.push((booleano2 || booleano3) && (booleano4 || booleano1))
  arrayResposta.push(!(booleano2 && booleano3) || !(booleano1 && booleano3))
  arrayResposta.push(!(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3))
  return arrayResposta
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let numerosPares = [0]
  let quantNumeroPar = 1
  let i = 1
  while (quantNumeroPar < n){
    if (i % 2 === 0){
      numerosPares.push(i)
      quantNumeroPar++
    }
    i++
  }
  // if (n === 3){
    // console.log(NumerosPares)
  // } else {
    return numerosPares
  // }

}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'

  if ((a === b) && (b === c)){
    return 'Equilátero'
  } else if ((a === b) || (b === c) || (a ===c)){
    return 'Isósceles'
  } else{
    return 'Escaleno'
  }
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
  resposta = {
    maiorNumero: num1,
    maiorDivisivelPorMenor: true,
    diferenca: 0
  }
  if (num1 > num2){
    resposta.maiorNumero = num1
    resposta.maiorDivisivelPorMenor = (num1 % num2 === 0)
    resposta.diferenca = num1 - num2
  } else {
    resposta.maiorNumero = num2
    resposta.maiorDivisivelPorMenor = (num2 % num1 === 0)
    resposta.diferenca = num2 - num1
  } 
  return resposta
  
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {
  let primeiroMaior = 0
  let primeiroMenor = +Infinity
  let segundoMaior = primeiroMaior
  let segundoMenor = primeiroMenor
  let ocorrencia = 0
  
  // Calculo do segundo maior
  let i = 0
  while (i < array.length){
    if (primeiroMaior < array[i]){
      primeiroMaior = array[i]
      ocorrencia = i
    }
    i++
  }
  i = 0
  while (i < array.length){
    if ((segundoMaior < array[i]) && ( i !== ocorrencia)){
      segundoMaior = array[i]
    }
    i++
  }

  // Calculo do segundo menor
  i = 0
  while (i < array.length){
    if (primeiroMenor > array[i]){
      primeiroMenor = array[i]
      ocorrencia = i
    }
    i++
  }
  i = 0
  while (i < array.length){
    if ((segundoMenor > array[i]) && ( i !== ocorrencia)){
      segundoMenor = array[i]
    }
    i++
  }

  return [segundoMaior, segundoMenor]
  

}

// EXERCÍCIO 11
function ordenaArray(array) {
  const novoArray = array
  const length = array.length;  
  for (let i = 0; i < length; i++) { 
    for (let j = 0; j < (length - i - 1); j++) { 
      if(novoArray[j] > novoArray[j+1]) {
        let temporario = novoArray[j]; 
        novoArray[j] = novoArray[j+1]; 
        novoArray[j+1] = temporario; 
      }
    }        
  }
 return novoArray 
}

// EXERCÍCIO 12
function filmeFavorito() {
const filme = {
  nome: 'O Diabo Veste Prada',
  ano: 2006,
  diretor: 'David Frankel',
  atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
  }
  return filme
}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
  return `Venha assistir ao filme ${filmeFavorito().nome}, de ${filmeFavorito().ano}, dirigido por ${filmeFavorito().diretor} e estrelado por ${filmeFavorito().atores[0]}, ${filmeFavorito().atores[1]}, ${filmeFavorito().atores[2]}, ${filmeFavorito().atores[3]}.`
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {
const infoRetangulo = {
  largura: lado1,
  altura: lado2,
  perimetro: 2 * (lado1 + lado2),
  area: lado1 * lado2
}
return infoRetangulo
}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {
let pessoaAnonima = {...pessoa}
pessoaAnonima.nome = 'ANÔNIMO'
return pessoaAnonima
}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {
const adultos = arrayDePessoas.filter((pessoa) => {
  return pessoa.idade >= 18
}) 
return adultos
}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {
  const criancas = arrayDePessoas.filter((pessoa) => {
    return pessoa.idade < 18
  }) 
  return criancas
}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {
  const dobroDosNumeros = array.map((numero) => {
    return numero * 2
  }) 
  return dobroDosNumeros
}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {
  const dobroDosNumerosS = array.map((numero) => {
    let dobro = numero * 2
    return dobro.toString()
  }) 
  return dobroDosNumerosS
}

// EXERCÍCIO 17C
function verificaParidade(array) {
  const paridadeNumero = array.map((numero) => {
    let parOuImpar = ''
    if (numero % 2 === 0){
      parOuImpar = 'par'
    } else {
      parOuImpar = 'ímpar'
    }
    return `${numero.toString()} é ${parOuImpar}`
  }) 
  return paridadeNumero 
}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {
  const pessoasComPermissao = pessoas.filter((pessoa)=>{
    return (pessoa.altura >= 1.5)  && (pessoa.idade > 14) && (pessoa.idade < 60)
  })
  return pessoasComPermissao
}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {
  const pessoasSemPermissao = pessoas.filter((pessoa)=>{
    let alturaNaoOK = pessoa.altura < 1.5
    let menor14 = pessoa.idade <= 14
    let maior60 = pessoa.idade >= 60
  return alturaNaoOK || menor14 || maior60
})
return pessoasSemPermissao
}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {
  let consulta = consultasNome
  for(let iPrincipal = 0; iPrincipal < consulta.length; iPrincipal++){
    for (let iSecundario = 0; 
             iSecundario < consulta.length - iPrincipal - 1;
             iSecundario++){
               if(consultasNome[iSecundario].nome > consultasNome[iSecundario + 1].nome){
                 let temporario = consultasNome[iSecundario]
                 consultasNome[iSecundario] = consultasNome[iSecundario + 1]
                 consultasNome[iSecundario + 1] = temporario
               }
             }
  }
return consulta
}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {
  // Função auxiliar para converter a data para a comparação
  const dataStringParaDataValue = (data)=>{
    const dataString = data.split('/')
    const dataNewDate = new Date(dataString[2], dataString[1] - 1, dataString[0])
    return dataNewDate.valueOf()
  }

  let consulta = consultasData
  for(let iPrincipal = 0; iPrincipal < consulta.length; iPrincipal++){
    for (let iSecundario = 0; 
            iSecundario < consulta.length - iPrincipal - 1;
            iSecundario++){
              if(dataStringParaDataValue(consulta[iSecundario].dataDaConsulta) > 
                  dataStringParaDataValue(consulta[iSecundario + 1].dataDaConsulta)){
                    let temporario = consulta[iSecundario]
                    consulta[iSecundario] = consulta[iSecundario + 1]
                    consulta[iSecundario + 1] = temporario       
              }
            }
  }
  return consulta
}

// EXERCÍCIO 20
function calculaSaldo(contas) {
  for (conta of contas){
    let totalCompras = conta.compras[0] + conta.compras[1] + conta.compras[2]  
    conta.saldoTotal = conta.saldoTotal - totalCompras
    }
  return contas
}
