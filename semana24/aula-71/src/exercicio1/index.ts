const crescente = (numero:number, index:number = 0) => {

    if(index > numero){
        return 
    }
    console.log(index);
    index ++;
    crescente(numero, index)
}

const decrescente = (numero:number) => {

    if(numero < 0){
        return 
    }
    console.log(numero);
    numero = numero - 1;
    decrescente(numero)
}

// crescente(6)
decrescente(6)