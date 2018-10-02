import React, {Component} from 'react'

 
//components
class Square extends Component {
    constructor(){
        super()
        this.state = {
          style1: {
            backgroundColor: ""
          },
          style2: {
            backgroundColor: ""
          },
          style3: {
            backgroundColor: ""
          },
          style4: {
            backgroundColor: ""
          }
        }
        this.handleBlack= this.handleBlack.bind(this);
        this.handlePurple= this.handlePurple.bind(this);
        this.handleBlueLeft= this.handleBlueLeft.bind(this);
        this.handleBlueRight= this.handleBlueRight.bind(this);
        this.handleFive = this.handleFive.bind(this);
        this.handleSix = this.handleSix.bind(this);
        this.handleSeven = this.handleSeven.bind(this);
        this.handle8 = this.handle8.bind(this);
        

    }

    handleBlack() {
        this.setState(prevState=>({
            style1 :{
                backgroundColor:"black",
                "transition": "all 1.5s linear"
            },
            style2 :{
                backgroundColor:"black",
                "transition": "all 1.3s linear"
            },
            style3 :{
                backgroundColor:"black",
                "transition": "all 1.1s linear"
            },
            style4 :{
                backgroundColor:"black",
                "transition": "all .9s linear"
            }

        }))
    }
    handlePurple() {
        this.setState(prevState=>({
            style1 :{
                backgroundColor:"purple",
                "transition": "all 1.5s linear"
            },
            style2 :{
                backgroundColor:"purple",
                "transition": "all 1.5s linear"
            }
        }))
    }
    handleBlueLeft() {
        this.setState(prevState=>({
            style3 :{
                backgroundColor:"blue",
                "transition": "all 1.5s linear"
            }
        }))
    }
    handleBlueRight() {
        this.setState(prevState=>({
            style4 :{
                backgroundColor:"blue",
                "transition": "all 1.5s linear"
            }
        }))
    }
    handleFive() {
        this.setState(prevState=>({
            style1 :{
                "transform":"scale(1.5)",
                "transition": "all .7s linear"
            },
            style2 :{
                "transform":"scale(1.5)",
                "transition": "all .7s linear"
            },
            style3 :{
                "transform":"scale(.5)",
                "transition": "all .7s linear"
            },
            style4 :{
                "transform":"scale(.5)",
                "background":"purple",
                "transition": "all .7s linear"
            }
        }))
    }
    handleSix() {
        this.setState(prevState=>({
            style1 :{
                "opacity":"0.5",
                "border":"10px solid black",
                "transform":"translate(55px,15px)",
                "transition": "all .7s linear"
            },
            style2 :{
                "opacity":"0.5",
                "border":"10px solid black",
                "transform":"translate(-55px,15px)",
                "transition": "all .7s linear"
            },
            style3 :{
                "opacity":"0.5",
                "border":"10px solid black",
                "transform":"translate(55px,-15px)",
                "transition": "all .7s linear"
            },
            style4 :{
                "opacity":"0.5",
                "border":"10px solid black",
                "transform":"translate(-55px,-15px)",
                "transition": "all .7s linear"
            }
        }))
    }
    handleSeven() {
        this.setState(prevState=>({
            style1 :{
                "opacity":"0.5",
                "border":"0 solid black",
                "transform":"translate(200px,100px)",
                "transition": "all .7s linear",
                "borderRadius":"0"
            },
            style2 :{
                "opacity":"0.5",
                "border":"0 solid black",
                "transform":"translate(-200px,100px)",
                "transition": "all .7s linear"
            },
            style3 :{
                "opacity":"0.5",
                "border":"0 solid black",
                "transform":"translate(200px,-100px)",
                "transition": "all .7s linear"
            },
            style4 :{
                "opacity":"0.5",
                "border":"0 solid black",
                "transform":"translate(-200px,-100px)",
                "transition": "all .7s linear",
                "borderRadius":"0"
            }
        }))
    }
    handle8() {
        this.setState(prevState=>({
            style1 :{
                "background":"white",
                "opacity":"0.5",
                "border":"10 solid black",
                "transform":"translate(200px,100px)",
                "transition": "all .7s linear",
                "borderRadius":"0"
            },
            style2 :{
                "background":"white",
                "opacity":"0.5",
                "border":"10 solid black",
                "transform":"translate(-200px,100px)",
                "transition": "all .7s linear"
            },
            style3 :{
                "background":"white",
                "opacity":"0.5",
                "border":"10 solid black",
                "transform":"translate(200px,-100px)",
                "transition": "all .7s linear"
            },
            style4 :{
                "background":"white",
                "opacity":"0.5",
                "border":"10 solid black",
                "transform":"translate(-200px,-100px)",
                "transition": "all .7s linear",
                "borderRadius":"0"
            }
        }))
    }




       //const{background} = this.state
    render(){
        const{style1,style2,style3,style4} = this.state
        return(
            <main>
                <div className="one"  style={style1}></div>
                <div className="two" style={style2} ></div>
                <div className="three" style={style3} ></div>
                <div className="four" style={style4} > </div>
                <button className="bone" onClick={this.handleBlack}>Johnny Cash</button>
                <button className="btwo" onClick={this.handlePurple}>Purple Rain</button>
                <button className="bthree" onClick={this.handleBlueLeft}>Blu</button>
                <button className="bfour" onClick={this.handleBlueRight}>Blu Two</button>
                <button className="bfive" onClick={this.handleFive}>Biggie Smalls</button>
                <button className='bsix' onClick={this.handleSix}>Closer</button>
                <button className="bseven" onClick={this.handleSeven}>Im Different</button>
                <button className='beight' onClick={this.handle8}>CoCo</button>
                
                
    
            </main>
        )
    }
}
export default Square;
