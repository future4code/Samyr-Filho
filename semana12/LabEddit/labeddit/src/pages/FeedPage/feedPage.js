import React, { useState } from "react"
import {useHistory} from "react-router-dom";
import useProtectedPage from "../../hooks/useProtectedPage"
import { StyledContainerCards, StyledContainerList } from "./feedPageStyle";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/urls";
import { goToPostPage } from "../../routes/coordinator";
import CardPostedList from "../../components/CardPostedList";
import PostCard from "../../components/PostCard";
import { postPost, postVoteUp, postVoteDown } from "../../services/posts";


const FeedPage = () => {
    const history = useHistory()
    useProtectedPage()
    const listPosts = useRequestData([], `${BASE_URL}posts`)
    // const [listPosts, setListPosts] = useState([])
    
    const [title, setTitle] = useState('')

    const onChangePost = (e) => {
        setTitle(e.target.value)
    }
    const onClickPost = () => {
        postPost(title,  history)

    }
    const onClickCard = (idPost) => {
        goToPostPage(history, idPost)
    }
    const onClickUp = (idPost, history) => {
        postVoteUp(idPost)
    }

    const onClickDown = (idPost, history) => {
        postVoteDown(idPost)
    }
    const ListaPost = listPosts.map((item) => {
        return (
            <CardPostedList
                key={item.id}
                id={item.id}

                userName={item.username}
                title={item.title}
                commentCount={item.commentCount}
                voteSum={item.voteSum}
                goToPostPage={(idPost)=>onClickCard(idPost)}
                onClickUp={(id)=>onClickUp(id)}
                onClickDown={(id)=>onClickDown(id)}
            >
            </CardPostedList>
        )
    })
    
    return (
        <StyledContainerList>
            <PostCard 
                valuePost={title}
                onChangePost={(e)=>onChangePost(e)}
                onClick={onClickPost}
            />
            
            <StyledContainerCards >
               {ListaPost}
            </StyledContainerCards>
        </StyledContainerList>
    )
}
export default FeedPage