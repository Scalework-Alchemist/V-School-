import React from 'react'

//Components

import Header from './Header'
import Footer from './Footer'
import Section from './Section'
import SideBar from './SideBar';


const data = {
    header: {
        title: "My Cool Props Website"
    },
    section: {
        sidebar: {
            menuItems: [
                "Home",
                "About",
                "Contact"
            ]
        },
        main: {
            title: "Props Blog Page",
            blogPosts: [
                { title: "What is props", body: "Props is an object passed between components as an argument" },
                { title: "Why props?", body: "Props lets you easily transfer information across the virtual DOM tree" },
                { title: "Where the props at?", body: "Every component can use props" }
            ]
        }
    },
    footer: {
        copyright: "©2018"
    }
}









function App(){
    return(
        <div>
        <Header title={data.header.title}/>
        <Footer title={data.footer.copyright}/>
        <Section title={data.section}/>
        <SideBar title={data.section.SideBar}/>
        </div>
    )
}

export default App;