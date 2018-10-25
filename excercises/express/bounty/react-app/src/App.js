import React, { Component } from "react";
import BountyList from './componets/BountyList/BountyList';
import PostBounty from './componets/PostBounty/PostBounty';
import NavBar from "./componets/NavBar/Navbar";

class App extends Component {



  render() {
    return (
      <div className="body_contianer">
      <NavBar/>
      <div className="content_wrapper">
        <BountyList/>
        <PostBounty/>
      </div>
      <footer>®</footer>

      </div>
    )
  }
}

export default App;

        