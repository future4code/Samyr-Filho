// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const alturaRetangulo = Number(prompt('Informe a altura do retangulo:'))
  const larguraRetangulo = Number(prompt('Informe a largura do retangulo:'))
  console.log(alturaRetangulo * larguraRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Informe o ano atual:'))
  const anoNascimento = Number(prompt('Informe seu ano de nascimento:'))
  console.log(anoAtual - anoNascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)
}


// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt('Informe o seu nome:')
  const idade = Number(prompt('Informe sua idade:'))
  const email = prompt('Informe seu e-mail:')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt('Informe suas três cores favorias:') 
  const cor2 = prompt('')
  const cor3 = prompt('')
  let listaCores = [cor1, cor2, cor3]
  console.log(listaCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const maiusculo = string.toUpperCase()
  return maiusculo
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return (string1.length == string2.length)
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiro = array[0]
  const segundo = array[array.length - 1]
  array[0] = segundo
  array[array.length - 1] = primeiro
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  const texto1 = string1.toUpperCase()
  const texto2 = string2.toUpperCase()
  const ehIgual = texto1.includes(texto2)
  return ehIgual
}


// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt('Qual o ano atual?'))
  const anoNascimento = Number(prompt('Qual o ano de nascimento?'))
  const anoEmissaoCarteira = Number(prompt('Qual o ano de emissão da carteira de identidade?'))
  const idade = anoAtual - anoNascimento
  const tempoEmitido = anoAtual - anoEmissaoCarteira

  const menorDe20 = (idade <= 20)
  const renova5 = (tempoEmitido % 5 === 0)
  const entre20e50 = ((20 < idade) && (idade <= 50))
  const renova10 = ((tempoEmitido / 10) >= 1)
  const maior50 = (idade > 50)
  const renova15 =((tempoEmitido / 15) >= 1)

  const renovar = ((menorDe20 && renova5) || (entre20e50 && renova10) || (maior50 && renova15))

  console.log(renovar)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const ehMult400 = (ano % 400 === 0)
  const ehMult100 = (ano % 100 === 0)
  const ehMult4 = (ano % 4 === 0)
  const ehBissextos = ((ehMult400) || (ehMult4 && !(ehMult100 && !ehMult400)))
  return ehBissextos
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maiorIdade = prompt('Você tem mais de 18 anos (Responda "sim" ou "não")?')
  const ensinoMedioCompleto = prompt('Você possui ensino médio completo (Responda "sim" ou "não")?')
  const disponibilidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso (Responda "sim" ou "não")?')
  
  const aprovadoPorIdade = maiorIdade.toUpperCase().includes('SIM')
  const aprovadoPorInsinoMedio = ensinoMedioCompleto.toUpperCase().includes('SIM')
  const aprovadoPorDisponibilidade = disponibilidade.toUpperCase().includes('SIM')

  console.log(aprovadoPorIdade && aprovadoPorInsinoMedio && aprovadoPorDisponibilidade)
}