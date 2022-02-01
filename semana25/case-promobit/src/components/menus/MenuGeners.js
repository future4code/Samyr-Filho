import React, { useContext, useState } from "react";
import GlobalContext from "../../global/GlobalContext";
const MenuGeners = () => {
    const {states, setters} = useContext(GlobalContext)
    const [personName, setPersonName] = useState([]);
    const [generoFiltro, setGeneroFiltro] = useState([])


    const setFiltros = (e) => {
      
        // const filtro = states.genres.filter((genre)=>{
        //     for(let name of personName){
        //         if(name === genre.name){ return true}
        //     }
        // })
        // const novoFiltro = generoFiltro.filter((genero)=>{
        //   if(genero.id === e.id)
        // })
        // setGeneroFiltro(novoFiltro)
        console.log("setFiltros", e.target);
    }
    const Menu = states.genres.map((item)=>{
      return (
        <div class="form-group form-check" style={{textAlign: "left"}} >
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1" style={{margin:"0 17px"}}>{item.name}</label>
        </div>
        // {/* <option onClickCapture={setFiltros} value={itemd}>{item.name}</option> */}
    
      
  )
    })
    const FilmesFiltrados = generoFiltro.map((filme)=> {
      console.log("filme", filme)
      return(
          
            <tr>
              <th scope="row">{filme.id}</th>
              <td>{filme.name}</td>
              
            </tr>
      )
    })

    return(
      <div class="container text-center border border-primary rounded" style={{height: "300px"}} >
      <script src='http://code.jquery.com/jquery-2.1.3.min.js'></script>  
      <script src='//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js'></script>
      
      <div class="btn-group">
        <button type="button" class="btn btn-danger dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Açãoaaa
        </button>
        <div class="dropdown-menu">
          <a class="dropdown-item" href="">Alguma ação</a>
          <a class="dropdown-item" href="">Outra ação</a>
          <a class="dropdown-item" href="">Alguma coisa aqui</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="">Link separado</a>
        </div>
      </div>
        




        <button type="button" class="btn btn-primary" style={{margin: "0 10px"}}>Filtrar</button>
        <button type="button" class="btn btn-danger">Resetar</button>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">name</th>
            </tr>
          </thead>
          <tbody>
            {FilmesFiltrados}
          </tbody>
        </table>
   </div>
    )
}

    export default MenuGeners