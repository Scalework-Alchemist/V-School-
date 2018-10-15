
//1: If you want to render a list of things as htmnl elements first import
import RapContainer from './Components/RapContainer';
import React from 'react'
import { render } from 'react-dom';
//components


function App(){
    return(
        <div>
            <RapContainer/>
        </div>
    )
}
render(
    <App/>,
    document.getElementById('root')
)