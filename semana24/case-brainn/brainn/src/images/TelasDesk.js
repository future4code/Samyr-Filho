// Mega-Sena #6BEFA3
// Quina #8666EF
// Lotofacil #DD7AC6
// Lotomania #FFAB64
// Timemania #5AAD7D
// Dia de sorte #BFAF83
import MegaSena from "./desktop/Desktop-MegaSena.png"
import DiaDeSorte from "./desktop/Desktop-DiaDeSorte.png"
import LotoFacil from "./desktop/Desktop-LotoFacil.png"
import LotoMania from "./desktop/Desktop-LotoMania.png"
import Quina from "./desktop/Desktop-Quina.png"
import TimeMania from "./desktop/Desktop-TimeMania.png"

export const TelasDesk = (tela) => {
    switch(tela){
        case ('0'):
            return MegaSena
        case ('1'):
            return Quina    
        case ('2'):
            return LotoFacil
        case ('3'):
            return LotoMania
        case ('4'):
            return TimeMania
        case ('5'):
            return DiaDeSorte
        default:
            return MegaSena
    }
}