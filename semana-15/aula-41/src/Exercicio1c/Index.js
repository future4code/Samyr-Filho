// c) 
const chalk = require('chalk')
const nome = process.argv[2]
const idade = parseInt(process.argv[3])

if(!isNaN(idade)){
    console.log(chalk.blue(`Olá ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`))
}else{
    if(process.argv.length < 4){
        console.log(chalk.red(`Algum argumento não foi passado!`))
    }else{
        console.log(chalk.yellow(`Idade inválida!`))
    }
}
// 