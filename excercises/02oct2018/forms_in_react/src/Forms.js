import React, {Component} from 'react'



class Forms extends Component {
    constructor(){
        super()
        this.state={
            username: 'btDev',
            password:'******'
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(event){
        const {target} = event
        this.setState({
            [target.name] : target.value
        })
    }
    handleSubmit(event){
        event.preventDefault()
        this.props.submit(this.state)
        this.setState({username:"", password:''})
    }
    render(){
        console.log()
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="">UserName:</label>
                <input name="username" onChange={this.handleChange} value={this.state.username} type="text" placeholder="username"/><br/>
                <label htmlFor="">PassWord:</label>
                <input name="password" type="password" onChange={this.handleChange} value={this.state.password} plceholder='password'/>
                <button>Submit</button>
            </form>
            <h1 className="Jessica">{this.state.username}</h1>
            </div>
        )
    }  
}
export default Forms;



