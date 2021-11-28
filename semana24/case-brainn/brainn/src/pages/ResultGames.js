import React, { useEffect, useState } from "react";
import { TelasDesk } from "../images/TelasDesk";
import Logo from "../images/desktop/Desktop-Logo.png"
import { BackImgContainer, 
         BallStyle, 
         ConcursoDescricaoStyle, 
         MainContainer, 
         ResultContainer, 
         Select, 
         SelectContainers,
         TextoTrevoStyle,
         TrevoStyle,
         ConcursoStyle, 
         ResultMainContainer} from "./styled";
import { getConcursosJogos, getJogos, getResultadoById } from "../services/RequestData";


const ResultGames = () => {
    const [telaAtual, setTelaAtual] = useState(1)
    const [jogos, setJogos] = useState([])
    const [jogoSelecionado, setJogoSelecionado] = useState()
    const [concursos, setConcursos] = useState([])
    const [resultadoConcusrso, setResultadoConcurso] = useState()

    useEffect(()=>{
        pegaJogos();
        
    }, [])
    

    const pegaJogos = async () => {
        const result = await getJogos();
        setJogos(result)
        pegaConcursos();
        atualizaTrevo()
    }

    const pegaConcursos = async () => {
        const result = await getConcursosJogos();
        setConcursos(result)
    }

    const jogoChange = (e) => {
        setTelaAtual(e.target.value)
        const jogoSelecionado = jogos.filter((jogoa)=>{
                                    return jogoa.id === Number(e.target.value)
                                })
        
        setJogoSelecionado(jogoSelecionado[0])
        // setaConcurso()
        pegaResultado(Number(e.target.value))
      };

    const pegaResultado = async (id) => {
        const concursoSelecionado = concursos.filter((concurso)=>{
            return concurso.loteriaId === id
        })
        const result = await getResultadoById(concursoSelecionado[0].concursoId);
        setResultadoConcurso(result)
        console.log('resultado', result)
    }
    
    const atualizaTela = () => {    
        return (
            <img src={TelasDesk(telaAtual)} 
            style={{width: "100%", height: "100%", position: "relative"}} alt=""
            />   
        )
        
    }
    const atualizaTrevo = () => {
        return (
            <div>
                {jogoSelecionado ?
                    (<div>
                        <TrevoStyle src={ Logo} alt=''/>
                        <TextoTrevoStyle >
                            {jogoSelecionado.nome ? jogoSelecionado.nome : <></>}
                        </TextoTrevoStyle>
                    </div>) : <></>
                } 
                
            </div>
            
            
        )
    }
   
    const listaJogos = jogos ? jogos.map((jogo)=>{
        return (
            <option key={jogo.id} value={jogo.id}>
                {jogo.nome}
            </option>
        )
    }) : <option>Sem jogos</option>

    const ListNumeros = resultadoConcusrso ? resultadoConcusrso.numeros.map((numero)=> {
        
        return (
            <p>
                {numero}
            </p>
        )
    }) : null
    
    const ConcursoInfo = () => {
        const dataConcurso = new Date(resultadoConcusrso.data)
        return (
            <ConcursoStyle>
                <p style={{fontSize: "1.5em"}}>Concurso</p>
                <h2>{resultadoConcusrso.id} - 
                    {dataConcurso.toLocaleDateString("pt-BR", { timeZone: "UTC" })}
                </h2>
            </ConcursoStyle>
        )
    }
    return(
        <MainContainer>
            <BackImgContainer>
                {atualizaTela()}
            </BackImgContainer>
            <SelectContainers>
                <Select onChange={(e)=>jogoChange(e)}>
                    <option hidden >Escolha um jogo</option>
                    {listaJogos}
                </Select>
            </SelectContainers>
            {atualizaTrevo()}
            <ResultMainContainer>
                
                    {resultadoConcusrso ?
                        <BallStyle>
                            {ListNumeros}
                        </BallStyle> 
                        : <></>
                    }
                
            </ResultMainContainer>
            {/* <ConcursoStyle> */}
                
                 {resultadoConcusrso ? <ConcursoInfo /> :
                                                <></>}
                 
            {/* </ConcursoStyle> */}
        </MainContainer>
    )
}
export default ResultGames