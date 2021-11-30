export interface hashTable {
    [index: number]: any
}

const numeroNaoRepetido = (lista: number[]): number => {
    const listanumeros: hashTable = {};
    
    for(let numero of lista){
        const index = numero
        if (index in listanumeros) {
            delete listanumeros[index]
        } else {
            listanumeros[index] = index
        }
    }
    return Number(Object.keys(listanumeros)[0])
}

console.log(numeroNaoRepetido([2,2,1]))
console.log(numeroNaoRepetido([4,1,2,1,2]))
console.log(numeroNaoRepetido([4,1,5,2,5,1,2]))
console.log(numeroNaoRepetido([5,2,9,6,9,1,2,1,3,8,6,8,3]))