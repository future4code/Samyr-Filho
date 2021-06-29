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
  

}
}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
