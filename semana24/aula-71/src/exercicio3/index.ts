const somaIterativa = (numero:number): number => {
    let total = 0;
    for(let i = 0; i <= numero; i++){
        total = total + i;
    }
    
    
    return total
}
console.log(somaIterativa(6));