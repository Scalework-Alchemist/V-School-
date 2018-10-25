import React, { Component } from "react";
import axios from "axios";


export default class PostBounty extends Component {
    constructor(){
        super();
        this.state = {
          ChoosenBounty: [],
          loading: true,
          err:null
        };

      }
    //   getBountyData(url) {
    //       return axios.get(url).then(response => response.data)
    //   }
    //   componentDidMount() {
    //       this.getBountyData("/api/bountylist/{id}")
    //         .then(ChoosenBounty => this.setState ({ ChoosenBounty, loading:false}));
    //   }

  render(){
    return <div></div>
    
  }
}
