

    // 1- RECEBE DUAS STRINGS
    //    ONE EDIT = 1 - REMOÇÃO DO ULTIMO CARACTER
    //               2 - ADIÇÃO NO ULTIMO CARACTER
    //               3 - TROCAR UM CARACTER

    // 2 - 
    // 3 -  RETIRAR O ULTIMO CARACTER DA 2ª STRING E VERIFICAR SE FICA IGUAL A 1ª (REMOÇÃO) => É ONE EDIT
    //      RETIRAR O ULTIMO CARACTER DA 1ª STRING E VERIFICAR SE FICA IGUAL A 2ª (ADIÇÃO) => É ONE EDIT
    //      SE A 1ª STRING TIVER O MESMO TAMANHO DA 2ª
    //          VIRIFICAR SE SOMENTE EXISTE 1 CARACTER DA 1ª STRING DIFERENTE DA 2ª (TROCA) => É ONEW EDIT
    // 4 -  

const caracteresDiferentes = (string1: string, string2: string): number => {
    let numeroCaracterDiferentes = 0;
    for(let i = 0; i < string1.length; i++){
        if(string1.substr(i, 1) !== string2.substr(i, 1)){
            numeroCaracterDiferentes ++
        }
    }
    return numeroCaracterDiferentes
}

const isOneEdit = (string1: string, string2: string): boolean => {
    const string2SemUltimo = string2.substr(0, string2.length-1)
    
    if(string2SemUltimo === string1){
        return true
    } else {
            const string1SemUltimo = string1.substr(0, string1.length-1)
            if(string1SemUltimo === string2){
                return true
                } else {
                    if((string1.length === string2.length) && 
                        (caracteresDiferentes(string1, string2)) === 1){
                        return true
                    } else {
                        return false
                    }
                }

            }
}

console.log(isOneEdit("banan", "banana"))
console.log(isOneEdit("bananak", "banana"))
console.log(isOneEdit("panana", "banana"))
console.log(isOneEdit("bananaaa", "banana"))