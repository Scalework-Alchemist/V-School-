import React, { Component } from 'react'
import { Switch, Route } from "react-router-dom"

//Components
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Backdrop from './components/Backdrop/Backdrop';
// import Loader from './components/Loader/Loader
import SmallPlates from './components/SmallPlates/SmallPlates'


class App extends Component {
    state = {
        sidebarOpen: false
    };

    sidebarClickHandler = () => {
        this.setState( (prevState)=> {
            return {sidebarOpen : !prevState.sidebarOpen};

        });
    };
    backdropClickHandler = () => {
        this.setState({sidebarOpen: false})
    };
    render(){
        let mainOpenClass = 
            
            "container--wrapper";
        if(this.state.sidebarOpen === false){
            mainOpenClass = "container--wrapper full";
        }

        let backdrop;
        if (this.state.sidebarOpen){

            backdrop = <Backdrop clickme={this.backdropClickHandler}/>
        }
        return(
            
            <div className={mainOpenClass}>
                <Header sidebarClickHandler={this.sidebarClickHandler}/>

                <Switch>
                    
                    <Route path="/" component={Main}/>
                    <Route path="/Small_Plates" component={SmallPlates}/>
                    </Switch>
                
                <Sidebar show={this.state.sidebarOpen}/>
                {backdrop}
                <Footer/>
                {/* <Loader/> */}
            </div>
        )
    }
}
export default App;