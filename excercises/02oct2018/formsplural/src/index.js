import React,{Component} from 'react'
import { render } from 'react-dom'

//compononts
import { Header } from "./components/Header"
import { Home } from "./components/Home"

export default class App extends Component {
    // constructor(){
    // super()

    // }


    render(){

        return(
            <div>
            <Header/>
            <h1>Hello</h1>
            <Home name={"mike"} initialAge={299}/>
            </div>
            
        )
    }
};

render(
    <App/>,
    document.getElementById('root')
)