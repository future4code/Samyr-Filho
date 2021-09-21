import React, { useState } from "react"
import { useParams } from "react-router-dom"
import CardCommented from "../../components/CardCommented"
import CardPosted from "../../components/CardPosted"
import CommentCard from "../../components/CommentCard"
import { BASE_URL } from "../../constants/urls"
import useProtectedPage from "../../hooks/useProtectedPage"
import useRequestData from "../../hooks/useRequestData"
import { commentVoteDown, commentVoteUp, postCommnet } from "../../services/comments"
import { StyledContainerCards, StyledContainerList } from "../FeedPage/feedPageStyle"
const PostPage = () => {
    // const history = useHistory()
    const params = useParams()
    useProtectedPage()
    const listComments = useRequestData([], `${BASE_URL}posts/${params.idPost}/comments`)
    const [comment, setComment] = useState('')

    const onChangeComment = (e) => {
        setComment(e.target.value)
    }
    const onClickComment = () => {
        postCommnet(comment, setComment(''), params.idPost)
    }
    const onClickUp = (idComment) => {
        commentVoteUp(idComment)
    }

    const onClickDown = (idComment) => {
        commentVoteDown(idComment)
    }
    const listaComments = listComments.map((comment) => {
        return (
            <CardCommented
            key={comment.id}
            idComment={comment.id}
            userName={comment.username}
            body={comment.body}
            voteSum={comment.voteSum}
            onClickUp={(id)=>onClickUp(id)}
            onClickDown={(id)=>onClickDown(id)}
            />

            
        )
    })
    // const listPostComments = useRequestData([], `${BASE_URL}posts/${params.idPost}/comments`)
    return (
        <StyledContainerList>
            <CardPosted
                // id={item.id}
                userName={params.idPost}
                title={'llll'}
                commentCount={listComments.length}
                voteSum={''}
                // goToPostPage={(id)=>onClickCard(id)}
            >
            </CardPosted>
            <CommentCard
                valuePost={comment}
                onChangePost={(e)=>onChangeComment(e)}
                onClick={onClickComment}
            >

            </CommentCard>
            <StyledContainerCards>
                {listaComments}
            </StyledContainerCards>
        </StyledContainerList>
    )
}
export default PostPage