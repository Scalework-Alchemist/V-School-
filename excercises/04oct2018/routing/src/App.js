import React from 'react'

import Navbar from "./Navbar"
import Footer from "./Footer"
import Home from "./Home"
import About from "./About"
import Services from "./Services"
import "./styles.css"

import {Link, Switch, Route} from 'react-router-dom'

export default function App(){

    return(
        <div className="MAMA">
            <Navbar Link={Link}/>
            <Switch >
                <Route exact path='/' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/services' component={Services}/>
            </Switch>
            <Footer/>
        </div>
    )
}
