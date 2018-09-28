import React from 'react'

//components must be uppercase
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";
import Nav from "./Nav";

function App(){
    return (  
        <div>
            <Header />
            <Nav />
            <Section />
            <Footer />       
            
        </div>
    )
}
export default App;
