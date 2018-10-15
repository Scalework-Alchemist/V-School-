import React, {Component} from 'react'



export default class NewRapper extends Component{
    constructor(){
        super()
        this.state = {
            name:"",
            favFood:"",
            album:""
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventdefault();
        this.props.submit(this.submit)
    }

    render(){
        const{name, favFood, album,} = this.state
        return(
            <div className="rapperWrapper">
            <form onSubmit={this.handleSubmit}>
                <label >name:</label>
                <input onChange={this.handleChange}name="name" value={name} type="text" placeholder="Enter Name"/>
                <label >Fav Food:</label>
                <input onChange={this.handleChange}name="favFood" value={favFood} type="text"placeholder="Feed Me"/>
                <label >Album:</label>
                <input onChange={this.handleChange}name="album" value={album} type="text"placeholder="Album"/>
                <button>Submit</button>
            </form>
            </div>
            
        )

    }


}

   

   
