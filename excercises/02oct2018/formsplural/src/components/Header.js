import React,{Component} from 'react'


export class Header extends Component {
    // constructor(){
    // super()

    // }

    render(){

        return(
            <nav className="navBar">
                <div className="container">
                    <div className="navHeader">
                        <div className="navLinks">
                            <li><a href="#">home</a></li>
                        </div>
                    </div>
                </div>
            </nav>
        
        )
    }
}

