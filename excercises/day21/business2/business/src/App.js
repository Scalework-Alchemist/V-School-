import React from 'react'
import "./styles.css"

// Component List
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer"


function App(){
    return (
        <div className = 'parent' >
            <Nav />
            <Main />
            <Footer />
        </div>
    )
}

export default App;