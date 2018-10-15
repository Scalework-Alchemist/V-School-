import React,{Component} from 'react'


// class App extends Component {
//     constructor(){
//         super()
//         this.state={

//         }
//         this.addMeme=this.addMeme.bind(this)
//     }
//     addMeme(){
//         this.setState(prevState=>({
            
//         }))
//     }

// }


//crud functions//
export default class App extends Component {
    constructor(props) {
        super();
        this.state = {
            items: []
        }
        this.addNumber = this.addNumber.bind(this);
        this.deleteNumber = this.deleteNumber.bind(this);
    }
    deleteNumber(index) {
        this.setState(prevState => ({
            items: prevState.items.filter((num, i) => index !== i)
        }))
    }
    addNumber(num) {
        this.setState(prevState => ({
            items: [...prevState.items, num]
        }))
    }
    replaceNumber(newNum, index){
        this.setState(prevState => ({
            items: prevState.items.map((num, i) => i === index ? newNum : num)
        }))
    }
    render() {
        const numberListItems = this.state.items.map((num, i) => (
            <li key={i} >
                <button onClick={() => this.deleteNumber(i)}>X</button>
                <button onClick={() => this.replaceNumber(Math.random(), i)}>Replace Number</button>
                {num}
            </li>
        ))
        return (
            <div>
                <button onClick={() => this.addNumber(Math.random())}>Generate Random Number</button>
                <ul>
                    {numberListItems}
                </ul>
            </div>
        )
    }
}