conimport React,{Component} from 'react'
import PropTypes from 'prop-types'

//Components
import rapperBank from "./RapperBank.json" 
import RenderRappers from "./RenderRappers";
import NewRapper from "./NewRapper" 

import "./main.css"


export default class RapContainer extends Component {
    constructor(){
        super()
        this.state ={
            rapperBank: rapperBank
        }
        this.addNewSubmit = this.addNewSubmit.bind(this);
    }
    addNewSubmit(rapper) {
        this.setState(prevState => ({
            rapperBank: [rapper, ...prevState.rapperBank]
        }))
    }

    render(){

        const{ rapperBank } = this.state
        return(
            //2: then you can pass this into whatever component needs the data 
            //   by doing something similiar to this rapperBank={rapperBank}
            //   this is your a prop declaration?
            <div>
                <NewRapper submit={rapper => this.addNewSubmit(rapper)}/>
                <RenderRappers rapperBank={rapperBank}/>
            </div>
        )
    }
}