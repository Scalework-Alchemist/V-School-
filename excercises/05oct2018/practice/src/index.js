import React from 'react'
import { render } from 'react-dom'

// import App from './App'
import './components/main.css'

//First make this 
//
// your name: how to make a simple element and display to dom
// function yourName(){
//     function formatName(){
//         return user.firstName + " " + 
//         user.lastName
//     }
    
//     const user ={
//         firstName: "Michael",
//         lastName: "Ferrer"
//     }
//     let nameElement = (
//         <h1>Hello my friend, {formatName(user)}. </h1>
//     )
    
//     render(
//         nameElement,
//         document.getElementById("root")
//     )
//     }
//     yourName()
// end of display your name


// Clock function: learn that you should only call render()once in an a react app 
// function tick1(){
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {
//                 new Date().toLocaleTimeString()}.
//             </h2>
//         </div>
//     )
//     render(
//         element,
//         document.getElementById("root")
//     )
    

// }
// setInterval(tick1, 500)
// end Clock function

//Clock_2 Function: learn to make elements statefull by encapsulating them thus making them reuseable
// function Clock(props){
//     return (
//         <div>
//             <h1>Hello, world! im slightly differnt.</h1>
//             <h2>It is {
//                 props.date.toLocaleTimeString()}.
//             </h2>
//         </div>
//     );
// }
    
//     function tick(){
//         render(
//             <Clock date={new Date()}/>,
//             document.getElementById("root")
//         )
//     }


// setInterval(tick, 1000)
// end of Clock_2 function 




//extending on Clock_2 function: converting a function into a class 
// import {Component} from "react"
// class Clock extends Component {
//     render(){
//         return(
//             <div>
//                 <h1>Hello, World!!</h1>
//                 <h2>It is 
//                 {this.props.date.toLocaleTimeString()}}
//                 </h2>
//             </div>
//         )
//     }
// }
// render(
//     <Clock date={new Date()}/>,
//     document.getElementById("root")
// )
// extending on Clock_2 function

            //extending on Clock_2  function part 3: Adding Local State to a Class

import {Component} from "react"
class Clock extends Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
                //adding lifecycles methods into a class
                //these methods are called "lifecycle hooks"
                //the componentDidMount() hook runs after the component has been rendered to the dom this is a good place to set up a timer.
   componentDidMount() {  
                //    *note how we save the timerId right on "this".*
       this.timerId = setInterval(
           ()=> this.tick(),
           1000
       )
   } 
   
   componentWillMount() {
    // We will tear down the timer 
    // in the componentWillUnmount() lifecycle hook:
       clearInterval(this.timerId);
   } 
   
                //    Finally, we will implement a method called tick()
                //    that the Clock component will run every second.
   tick() {
       this.setState({
           date: new Date()
       });
   }
  
   render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
  
  render(
    <Clock />,
    document.getElementById('root')
  );

  