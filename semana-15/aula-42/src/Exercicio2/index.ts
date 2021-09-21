// a) A entrada espera um array 'numeros'
//    A saída é um objeto 'estatisticas' com 3 propriedades numéricas 'maior', 'menor' e 'media'
function obterEstatisticas(numeros: number[]) {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }
    type resposta = {
        maior: number,
        menor: number,
        media: number
    }
    const estatisticas: resposta = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
//b)As outras variáveis são o array 'numerosOrdenados' que recebe o array passado
//  como parametro ordenado, a number 'soma' para acumular os numeros do array 'numeros'
//  e estatisticas que foi tiptificada como um objeto tipificado.
//c)



