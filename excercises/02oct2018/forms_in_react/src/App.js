import React, {Component} from 'react'
import Forms from './Forms';

class App extends Component {
    constructor(){
        super();
        this.state ={
            names:[],
        }
        this.addName=this.addName.bind(this);
    }
    addName(username){
        this.setState(prevState =>({
            names:[username, prevState.input]
        }))
    }
    render(){

        return(
            <div>
                <Forms submit={input=> this.addName(input.username)}/>
                <li className="whore">{this.state.addName}</li>
            </div>
        )
    }
}



export default App;