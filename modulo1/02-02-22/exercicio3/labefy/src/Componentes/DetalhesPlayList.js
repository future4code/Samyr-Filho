import React from 'react'
import axios from 'axios'

const headers = {
    headers: {
      Authorization: "samyr-hissa-marzo"
    }
  }

class DetalhesPlaylist extends React.Component {
    state = {
        tracks : []
    }

    componentDidMount() {
        this.getPlayList()
    }
    getPlayList = async () => {
        let url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/search?name=${this.props.PlayListSel.id}`
        const response1 = await axios.
        get(url, headers)

        url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${response1.data.result.playlist[0].id}/tracks`
        const response2 = await axios.get(
            url, headers
        )

        this.setState({tracks:response2.data.result.tracks})
    }
    render() {
        return <div>
            <div>
                Detalhes da PlayList:  <h4>{this.props.PlayListSel.id}</h4>
            </div>
            
            {this.state.tracks.map((track) => {
                console.log('url: ', track.url)
                return <div>
                    <table>
                        <tr>
                        <th>música</th>
                        <th>Cantor/Banda</th>
                        <th>URL</th>
                        </tr>
                        <tr>
                        <td>{track.name}</td>
                        <td>{track.artist}</td>
                        <td><a href={track.url} target='_blank'>url</a></td>
                        </tr>
                    </table>
                    
                </div>
            })}
            <button onClick={this.props.mudarTelaAdd}>Voltar</button>
        </div>
    }
}

export default DetalhesPlaylist