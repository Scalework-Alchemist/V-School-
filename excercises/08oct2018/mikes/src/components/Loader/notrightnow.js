import React, { Component } from 'react'


import RapidAPI from 'rapidapi-connect'
import Flavors from '../Flavors/Flavors';

var rapid = new RapidAPI("cy-bar_5bc0cf26e4b02d6cfa6a9f3e", "db45d472-8bdd-4742-8f8a-7eb4ee4e2d17");





export default class GetFlavors extends Component {
    constructor(){
        super();
        this.state = {
            flavors: [],
            loading: true,
            err: null
            }

        }      
    componentDidMount() {
        const allFlavors = (
            rapid.call('Strain', 'getStrainsByFlavor', { 
                'apiKey': 'c3WR8E0',
                'flavor': {}
            
            }).on('success', (payload)=>{
                 /*YOUR CODE GOES HERE*/ 
            }).on('error', (payload)=>{
                 /*YOUR CODE GOES HERE*/ 
            })
        )
    }

    render(){
        const options = this.state.flavors.map((flavor, i)=>{
            return <option key={i}>{flavor}</option>  
        })
        return(
        <React.Fragment>
        {options}
        </React.Fragment>
        )
    
    }

}