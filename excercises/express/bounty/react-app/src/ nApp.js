import React, { Component } from "react";



import BountyList from './componets/BountyList';

class nApp extends Component {
    constructor(){
        super()
        this.state = {
            param: false,
            param: false,
            param: false,
        }
    }
  render() {
    return (
      <div>
        <BountyList/>
      </div>
    )
  }
}

export default nApp;