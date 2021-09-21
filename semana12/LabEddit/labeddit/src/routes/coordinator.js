export const goToHomePage = (history) => {
    history.push('/')
}
export const goToCadastro = (history) => {
    history.push('/cadastro')
}
export const goToFeedPage = (history) => {
    history.push('/feedPage')
}
export const goToPostPage = (history, idPost) => {
    history.push(`/postPage/${idPost}`)
}
