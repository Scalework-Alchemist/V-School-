import React, {Component} from 'react'

///alchemist notes
// the standerd view for this app is mobile iphone 8+
//havent made it responsive yet
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
          },
          style5: {
              backgroundColor:""
          },
          style6: {
              backgroundColor:""
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
        this.handleHidden = this.handleHidden.bind(this);
        this.handleHidden1 = this.handleHidden1.bind(this);
        this.handleHidden2 = this.handleHidden2.bind(this);
        this.handleHidden3 = this.handleHidden3.bind(this);
        

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
            },
            style5 :{
                backgroundColor:"orange",
                "transition": "all 1.5s linear"
            }
        }))
    }
    handleBlueRight() {
        this.setState(prevState=>({
            style4 :{
                backgroundColor:"blue",
                "transition": "all 1.5s linear"
            },
            style5 :{
                backgroundColor:"red",
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
    handleHidden() {
        this.setState(prevState=>({
            style6 :{
                "transition": "all .7s linear",
                "backgroundColor":"blanchedalmond"
            }
        }))
    }
    handleHidden1() {
        this.setState(prevState=>({
            style6 :{
                "transition": "all .7s linear",
                "backgroundColor":"white"
            }
        }))
    }
    handleHidden2() {
        this.setState(prevState=>({
            style6 :{
                "transition": "all .7s linear",
                "backgroundColor":"#EAE6DA"
            }
        }))
    }
    handleHidden3() {
        this.setState(prevState=>({
            style6 :{
                "transition": "all .7s linear",
                "backgroundColor":"salmon"
            }
        }))
    }




       //const{background} = this.state
    render(){
        const{style1,style2,style3,style4,style5,style6} = this.state
        return(
            <main style={style6}>
                <div className="one"  style={style1} onClick={this.handleHidden}>im</div>
                <div className="two" style={style2} onClick={this.handleHidden1}>best</div>
                <div className="three" style={style3} onClick={this.handleHidden2}>on</div>
                <div className="four" style={style4} onClick={this.handleHidden3}>iphone8+</div>
                <button className="bone"  style={style5} onClick={this.handleBlack}>Johnny Cash</button>
                <button className="btwo"  style={style5} onClick={this.handlePurple}>Purple Rain</button>
                <button className="bthree"  style={style5} onClick={this.handleBlueLeft}>Blu</button>
                <button className="bfour"  style={style5} onClick={this.handleBlueRight}>Blu Two</button>
                <button className="bfive"  style={style5} onClick={this.handleFive}>Biggie Smalls</button>
                <button className='bsix'  style={style5} onClick={this.handleSix}>Closer</button>
                <button className="bseven"  style={style5} onClick={this.handleSeven}>Im Different</button>
                <button className='beight' style={style5} onClick={this.handle8}>CoCo</button>
                
                
    
            </main>
        )
    }
}
export default Square;
