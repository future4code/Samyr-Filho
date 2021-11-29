const ladraoCasa = (listaCasas:number[]): number => {
    let seq1 = 0;
    let seq2 = 0;
    for(let casa = 0; casa < listaCasas.length; casa++){
        if(casa % 2 === 0){
            seq1 += listaCasas[casa]
        } else {
            seq2 += listaCasas[casa]
        }
    }
    if(seq1 >= seq2){
        return seq1
    } else {
        return seq2
    }
}

// console.log(ladraoCasa([1,2,3,1]))

// console.log(ladraoCasa([2,7,9,3,1]))

console.log(ladraoCasa([2,3,6,12,3,9,11,4]))