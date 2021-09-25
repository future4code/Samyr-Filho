// Exercício 2
const operacao = process.argv[2]
const primeiroArg = parseFloat(process.argv[3])
const segundoArg = parseFloat(process.argv[4])

if(operacao === 'add'){
    console.log(primeiroArg + segundoArg)
}else if(operacao === 'sub'){
    console.log(primeiroArg - segundoArg)
}else if(operacao === 'mult'){
    console.log(primeiroArg * segundoArg)
}else if(operacao === 'div'){
    console.log(primeiroArg / segundoArg)
}else{
    console.log('Operação inválida')
}