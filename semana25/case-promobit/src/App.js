import React from "react"
import GlobalStateContext from "./global/GlobalStatesContext";
import Router from "./routers/Router";

function App() {
  
  return (
    <GlobalStateContext >
        
        <Router />
      
    </GlobalStateContext>
  );
}

export default App;
