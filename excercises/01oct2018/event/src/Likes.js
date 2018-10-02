import React, {Component} from 'react'

class Likes extends Component {
    constructor(){
        super();
        this.state = {
            likes:0,
            dislikes:0
        }
        this.handleUpvote=this.handleUpvote.bind(this);
        this.handleDownvote=this.handleDownvote.bind(this);
        this.handleResetvote=this.handleResetvote.bind(this);

    }
    
    handleUpvote(){
        this.setState(prevState => ({
            likes: prevState.likes + 1
        }))
    }
    handleDownvote(event){
        console.log(event.charCode)
        this.setState(prevState => ({
            dislikes: prevState.dislikes + 1
        }))
    }
    handleResetvote(){
        this.setState({likes: 0, dislikes:0})
    }
    render(){
        const {likes,dislikes}= this.state

        return <div>
            <button onClick={this.handleUpvote}>Like</button>
            <button onKeyDown={this.handleDownvote}>dislikes</button>
            <button onClick={this.handleResetvote}>reset</button>
            <p>👍 <span>{likes}</span></p><p>🖕 <span>{dislikes}</span></p>
            <textarea>
            Hello Friend...
            </textarea>
        </div>
        
    }
}
export default Likes;