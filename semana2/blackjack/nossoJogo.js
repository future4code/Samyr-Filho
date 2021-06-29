/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
/*
const comprarDuasCartas = () => {
   const cartas = []
   for (let i = 1; i <= 2; i++){
      cartas.push(comprarCarta())
   }
   return cartas
}

const pontuacao = (cartas) => {
   let total = 0
   for (let carta of cartas){
   total += carta.valor
   }
   return total
}

console.log('Seja bem vindo(a) ao jogo de Blackjack!')


while (confirm('Quer iniciar uma nova rodada?')){
   const cartasUsuario = comprarDuasCartas()
   const cartasComputador = comprarDuasCartas()

   const totalUsuario = pontuacao(cartasUsuario)
   const totalComputador = pontuacao(cartasComputador)

   console.log(`Usuário - Cartas: ${cartasUsuario[0].texto} ${cartasUsuario[1].texto} - pontuação ${totalUsuario}`)
   console.log(`Computador - Cartas: ${cartasComputador[0].texto} ${cartasComputador[1].texto} - pontuação ${totalComputador}`)
   if (totalUsuario > totalComputador) {
      console.log('O Usuário ganhou!')
   } else if (totalComputador > totalUsuario) {
      console.log('O Computador ganhou!')
   } else {
      console.log('Empate')
   }
}
console.log('O jogo acabou!')
*/