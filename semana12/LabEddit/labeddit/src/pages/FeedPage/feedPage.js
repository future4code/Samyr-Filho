import React from "react"
import {useHistory} from "react-router-dom";
import { goToPostPage } from "../../routes/coordinator";
const FeedPage = () => {
    const history = useHistory()
    const ListaPost = () => {
        return (
            <div>
                <li>
                    <p>post 1</p>
                    <button onClick={() => goToPostPage(history, '1')}>Entrar</button>
                </li>
                <li>
                    <p>post 2</p>
                    <button onClick={() => goToPostPage(history, '2')}>Entrar</button>
                </li>
                <li>
                    <p>post 3</p>
                    <button onClick={() => goToPostPage(history, '3')}>Entrar</button>
                </li>
            </div>
        )
    }
    return (
        <div>
            <p>Lista de Feeds</p>
            <ol>
               <ListaPost/>
                
                
            </ol>
        </div>
    )
}
export default FeedPage