interface hashTable {
    [index: string]: any
  }

const stringReturn = (input: string) => {
    const coleta: hashTable = {}
    for(let i = 0; i < input.length; i++){
        if(coleta[input.substr(i, 1)]){
            coleta[input.substr(i, 1)] ++
        } else {
            coleta[input.substr(i, 1)] = 1
        }
    }
    let stringResult = ""
    for (const property in coleta) {
        stringResult = stringResult + String(property) + String(coleta[property])

    }
    if(stringResult.length > input.length){
        return input
    } else {
        return stringResult
    }
        
}

console.log(stringReturn("aabbb"))
console.log(stringReturn("aabcccccaaa"))
console.log(stringReturn("accurate"))
console.log(stringReturn("escola"))