import ResultGames from "../pages/ResultGames"

const Router = () => {
    return (
        <BrouseRouter>
            <switch>
                <Router exact path="/results">
                    <ResultGames>

                    </ResultGames>
                </Router>
            </switch>
        </BrouseRouter>
    )
}
export default Router