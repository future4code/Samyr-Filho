// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  const novoArray = array.reverse()
  return novoArray
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  const novoArray = array.sort((a,b)=>(a-b))
  return novoArray
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    const novoArray = []
    for(let item of array){
        if((item % 2) === 0){
            novoArray.push(item)
        }
    }
  return novoArray
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    const novoArray = array.filter((item)=>{
        return (item % 2) === 0 
    }).map((item)=> Math.pow(item, 2))
    return novoArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    const novoArray = array.sort((a,b)=>(a-b))
    return novoArray[novoArray.length - 1]
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let menor = num1
    let maior = num2
    if(num1 > num2){
        maior = num1
        menor = num2
    }
    return {
        maiorNumero: maior,
        maiorDivisivelPorMenor: (maior % menor) === 0,
        diferenca: maior - menor
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   const numerosPares = []
   for(let item = 0; item < n; item++){
       numerosPares.push(item * 2)
   }
   return numerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    
    if((ladoA === ladoB) && (ladoB === ladoC)){
        return "Equilátero"
    }
    if((ladoA === ladoB) || (ladoA === ladoC) || (ladoB === ladoC)){
        return "Isósceles"
    } else {
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    const arrayOrdenado = array.sort((a,b)=>(a-b))
    return [arrayOrdenado[arrayOrdenado.length - 2],
    arrayOrdenado[1]]
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let elenco =''
    for(let ator of filme.atores){
        elenco = elenco + ator + ', '
    }
    elenco = elenco.substring(0, elenco.length - 2)
   return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${elenco}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   const novaPessoa = {...pessoa, nome: 'ANÔNIMO'}
   return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    const temPermissao = pessoas.filter((pessoa)=>{
        return ((pessoa.altura >= 1.5) && ((14 < pessoa.idade) && (pessoa.idade < 60)))
    })
   return temPermissao
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}