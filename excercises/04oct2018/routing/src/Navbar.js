import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar(props){
    return(
        <header className="NAV">
            <h1 className="headspace">Welcome to CODEDEALERS.COM</h1>
            <Link className="left" to="/">Home</Link>
 
            <Link className="center" to="/about">About</Link>
 
            <Link className="right" to="/services">Services</Link>
 
        </header> 
    )
}








