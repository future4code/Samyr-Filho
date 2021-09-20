const fs = require('fs');
let listaTarefa = []
const atualizaArquvo = () => {
    let data = JSON.stringify(listaTarefa)
    try{
        fs.writeFileSync('./src/public/Lista.json', data)
        // fs.statSync('./src/public/Lista.json')
        // fs.unlink("./src/public/Lista.json")
    }
    catch (e) {
        fs.unlink("./src/public/Lista.json")
        fs.writeFileSync('./src/public/Lista.json', data)
    }
    
}
const lerArquivo = ()=>{
    try {
        fs.statSync('./src/public/Lista.json')
        const data = fs.readFileSync('./src/public/Lista.json')
        listaTarefa = JSON.parse(data)
      }
      catch (e) {
        atualizaArquvo()
      }
}
const tarefa = process.argv[2]
lerArquivo()
listaTarefa.push(tarefa)
atualizaArquvo()
console.log('lista', listaTarefa)