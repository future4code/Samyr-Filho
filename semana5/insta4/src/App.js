import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';


const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    arrayPost:[
      {nomeUsuario: 'paulinha',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150'
      },
    {nomeUsuario: 'carlinha',
    fotoUsuario: 'https://picsum.photos/50/52',
    fotoPost: 'https://picsum.photos/200/130'
    },
    {nomeUsuario: 'claudinha',
    fotoUsuario: 'https://picsum.photos/50/54',
    fotoPost:'https://picsum.photos/200/140'
  }],
    valorInputNomeUsuario:'',
    valorInputFotoUsuario:'',
    valorInputFotoPost:''
  };

  addPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      fotoUsuario: this.state.valorInputFotoUsuario,
      fotoPost: this.state.valorInputFotoPost
    };
    console.log({novoPost})
    const novoArrayPost = [...this.state.arrayPost, novoPost];
    console.log({novoArrayPost})
    this.setState( {arrayPost: novoArrayPost} )
  };

  onChangeInputNomeUsuario = (event) => {
    this.setState( {valorInputNomeUsuario: event.target.value} )
  };

  onChangeInputFotoUsuario = (event) => {
    this.setState( {valorInputFotoUsuario: event.target.value} )
  };

  onChangeInputFotoPost = (event) => {
    this.setState( {valorInputFotoPost: event.target.value} )
  };

  render() {

    const listaDePost = this.state.arrayPost.map((umPost) => {
      return (

          <Post
          nomeUsuario={this.state.post.nomeUsuario}
          fotoUsuario={this.state.post.fotoUsuario}
          fotoPost={this.state.post.fotoPost}
          />

      )
    });

    return (
      <MainContainer>
        <div>
          <input
            value={this.state.valorInputNomeUsuario}
            onChange={this.onChangeInputNomeUsuario}
            placeholder={'Nome do Usuário'}
          />
          <input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={'Foto do Usuário'}
          />
          <input
            value={this.state.valorInputFotoPostp}
            onChange={this.onChangeInputFotoPost}
            placeholder={'Foto do Post'}
          />
          <button onClick={this.addPost} >Adicionar</button>
        </div>
        <div>
          {listaDePost}
        </div>
        {/* <Post
          nomeUsuario={this.state.arrayPost[0].nomeUsuario}
          fotoUsuario={this.state.arrayPost[0].fotoUsuario}
          fotoPost={this.state.arrayPost[0].fotoPost}
        />
        <Post
          nomeUsuario={this.state.arrayPost[1].nomeUsuario}
          fotoUsuario={this.state.arrayPost[1].fotoUsuario}
          fotoPost={this.state.arrayPost[1].fotoPost}
        />
        <Post
          nomeUsuario={this.state.arrayPost[2].nomeUsuario}
          fotoUsuario={this.state.arrayPost[2].fotoUsuario}
          fotoPost={this.state.arrayPost[2].fotoPost}
        /> */}

      </MainContainer>
    );
  }
}

export default App;
