const numeroNaoRepetido = (listanumeros:number[]): number => {
    const listaOrdenada = listanumeros.sort(function(a, b){
        if(a > b) return 1;
        if(a < b) return -1;
        return 0
    })
    let index = 0;
    let achei = false;
    
    while ((index < listaOrdenada.length - 1) && !achei){
        if(listaOrdenada[index] !== listaOrdenada[index + 1]){
            achei = true;
        }
        if(!achei){index = index + 2}
        
    }
    
    return listaOrdenada[index]
}


console.log(numeroNaoRepetido([2,2,1]))
console.log(numeroNaoRepetido([4,1,2,1,2]))
console.log(numeroNaoRepetido([4,1,5,2,5,1,2]))
console.log(numeroNaoRepetido([5,2,9,6,9,1,2,1,3,8,6,8,3]))
