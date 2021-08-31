import React from "react"
import {useHistory, useParams} from "react-router-dom";
const PostPage = () => {
    const history = useHistory()
    const params = useParams()

    return (
        <div>
            <p>Pagina de Post {params.idPost}</p>
        </div>
    )
}
export default PostPage