const soma = (numero:number, parcial: number = 0): number => {
    
    if(numero === 0){
        return parcial
    }
    
    return soma(numero-1, parcial + numero)
}
console.log(soma(3));