import React from 'react'
import axios from 'axios'
import DetalhesPlaylist from './DetalhesPlayList'
// import styled from 'styled-components'

const headers = {
    headers: {
      Authorization: "samyr-hissa-lovelace"
    }
  }
class PlayListas extends React.Component {
    state = {
        playLista: [],
        inputNome: '',
        telaAtual: 'Inclusao',
        playListSel: {
            id: '',
            name: ''
        }
        

    }
    componentDidMount() {
        this.getPlayList()
    }
    onChangeNome = (event) => {
        this.setState({inputNome: event.target.value})
    }
    onClickAdd = async () => {
        const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
        const body = {
            "name": this.state.inputNome 
        }
        const response = await axios
        .post(url, body, headers)
        this.getPlayList()
    }
    getPlayList = async () => {
        const response = await axios
            .get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', headers);
        // console.log('lista: ', response.data.result.list)
        this.setState({playLista: response.data.result.list}) 
    }
    delPlayList = async (event) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${event.target.value}`
        try {
            const response = await axios
                .delete(url, headers)
            }
        catch(erro) {
                alert('Playlist não deletada!')
            }
        this.getPlayList()
    }
    mudarTelaDetalhe = (event) => {
        const novoPlaySel = {
            id: event.target.id,
            name: event.target.value
        }
        // const liSel = event.target.nome
        // console.log('id: ', event.target.id, 'name: ', event.target.value)
        this.setState({playListSel: novoPlaySel})
        this.setState({telaAtual: 'Detalhe'})
        
    }
    mudarTelaAdd = () => {
        this.setState({telaAtual: 'Inclusao'})
    }

    render() {
        const listaPLaylist = this.state.playLista.map((play) => {
            return <li key={play.id} id={play.name} nome={play.name} onClick={this.mudarTelaDetalhe}>{play.name}
            <button 
                onClick={this.delPlayList}
                value={play.id}>Deletar</button>
            </li>
        })

        const Inclusao = () => {
            return <div>
            <div>{listaPLaylist}</div>
            <div>
                
                <div>Nome da PLayList: 
                    <input 
                    placeholder='Nome'
                    value={this.inputNome}
                    onChange={this.onChangeNome}></input >
                </div>
                <button onClick={this.onClickAdd}>Adicionar</button>
            </div>
        </div>
        }
        return (
            <div>
                
                {(this.state.telaAtual === 'Inclusao') ? 
                    Inclusao() : 
                    <DetalhesPlaylist
                        mudarTelaAdd={this.mudarTelaAdd}
                        PlayListSel={this.state.playListSel}
                    ></DetalhesPlaylist>}
                
            </div>
        )
    }
}
export default PlayListas