import cebola from './img/cebola.jpg';
import abacaxi from './img/abacaxi.jpg';
import despertador from './img/despertador.jpg';
import floresta from './img/floresta.jpg';
import luzes from './img/luzes.jpg';
import montanha from './img/montanha.jpg';
import motorista from './img/motorista.jpg';
import vestido from './img/vestido.jpg';
import inicio from './img/home.PNG';
import em_alta from './img/em-alta.png';
import inscricoes from './img/inscricoes.PNG';
import originais from './img/originais.PNG';
import historico from './img/historico.PNG';
import './App.css';

function App() {

  // Espaço para declarar as function 
  const reproduzVideo = () => {
    alert("O vídeo está sendo reproduzido")
}
const titulo = 'Título do vídeo'

// **********************************


return (
  <div>
    <div className="tela-inteira">
        <header>
          <h1>Lab Tube</h1>
          <input type="text" placeholder="Busca" id="campoDeBusca" />
        </header>

        <main>
            <nav className="menu-vertical">
                <ul>
                    <li className="botoes-meunu-vertical"> <img src={inicio} alt='Home' />Início</li>
                    <li className="botoes-meunu-vertical"> <img src={em_alta} alt='Em alta' />Em alta</li>
                    <li className="botoes-meunu-vertical"> <img src={inscricoes} alt='Inscrições' />Inscrições</li>
                    <hr />
                    <li className="botoes-meunu-vertical"> <img src={originais} alt='Originais' />Originais</li>
                    <li className="botoes-meunu-vertical"> <img src={historico} alt='Históricos' />Histórico</li>
                </ul>
            </nav>

            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src={cebola} alt="Cebola" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src={abacaxi} alt="Abacaxi" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src={despertador} alt="Despertador" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src={floresta} alt="Floreta" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src={luzes} alt="Luzes" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src={montanha} alt="Montanha" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src={motorista} alt="Motorista" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src={vestido} alt="Vestido" />
                    <h4>{titulo}</h4>
                </div>
            </section>
        </main>

        <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer>
    </div>
  </div>
  );
}

export default App;
