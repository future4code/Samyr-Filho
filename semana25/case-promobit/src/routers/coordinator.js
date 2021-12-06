export const goToHome = (history) => {
    history.push("/")
}

export const goToPopularMovies = (history) => {
    history.push("/movies")
}

export const goToDetailsMovies = (history, movieId) => {
    history.push(`/movies/details/${movieId}`)
}