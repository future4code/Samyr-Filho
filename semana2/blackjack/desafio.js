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

const cartasInvalidas = (cartas) => {
      let invalida = false
      for (let carta of cartas){
         if(carta.texto[0] === 'A'){invalida = true}
      }
      return invalida
   }

const textoDasCartas = (cartas) => {
      let texto = ''
      for (let carta of cartas){
         texto += carta.texto + ' '
      }
      return texto
   }
  
console.log('Seja bem vindo(a) ao jogo de Blackjack!')
   
   
while (confirm('Quer iniciar uma nova rodada?')){
      let cartasUsuario = comprarDuasCartas()
      let cartasComputador = comprarDuasCartas()

   // troca as cartas invalidas
   while (cartasInvalidas(cartasUsuario)){
         cartasUsuario = comprarDuasCartas()
      }
   while (cartasInvalidas(cartasComputador)){
         cartasComputador = comprarDuasCartas()
      }
   // ***********************

   let totalUsuario = pontuacao(cartasUsuario)
   let totalComputador = pontuacao(cartasComputador)
   
   const usuarioQuerMaisCarta = () => {
     return confirm(`Suas cartas são ${textoDasCartas(cartasUsuario)}. A carta revelada do computador é ${cartasComputador[0].texto}.
                                   Deseja comprar mais uma carta?`)
   }

   // Rodada do usuário
   let compraMais = usuarioQuerMaisCarta()
   while(compraMais){
         cartasUsuario.push(comprarCarta())
         totalUsuario = pontuacao(cartasUsuario)
         // console.log(`${textoDasCartas(cartasUsuario)} Total usuario: ${totalUsuario}`)
         compraMais = totalUsuario < 21
         if (compraMais){
            compraMais = usuarioQuerMaisCarta()
         }
      }

   // Rodada do computador
   while((totalComputador <= totalUsuario) && (totalComputador <= 21) && (totalUsuario <= 21)){
         cartasComputador.push(comprarCarta())
         totalComputador = pontuacao(cartasComputador)
      }   
   
   // resultado
   console.log(`Suas Cartas são ${textoDasCartas(cartasUsuario)}. Sua pontuação é ${totalUsuario}`)
   console.log(`As Cartas do computador são ${textoDasCartas(cartasComputador)}. A pontuação do computador é ${totalComputador}`)

   if ((totalUsuario <= 21) && (totalUsuario > totalComputador) || 
      ((totalComputador > 21)) 
      // && (totalUsuario > totalComputador)
      ) {
         console.log('O Usuário ganhou!')
      } else if ((totalComputador > totalUsuario) || (totalUsuario > 21)){
         console.log('O Computador ganhou!')
      } else {
         console.log('Empate')
      }
   }

console.log('O jogo acabou!')

