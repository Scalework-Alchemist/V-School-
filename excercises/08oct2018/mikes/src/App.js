import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

//Components
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Backdrop from "./components/Backdrop/Backdrop";
import Flavors from "./components/Flavors/Flavors";
import RapidAPI from "rapidapi-connect";
var rapid = new RapidAPI(
  "cy-bar_5bc0cf26e4b02d6cfa6a9f3e",
  "db45d472-8bdd-4742-8f8a-7eb4ee4e2d17"
);

class App extends Component {
  constructor() {
    super();
    this.state = {
      sidebarOpen: false,
      flavorChoosen: [],
      idChoosen: []
    };
  }
  sidebarClickHandler = () => {
    this.setState(prevState => {
      return { sidebarOpen: !prevState.sidebarOpen };
    });
  };
  backdropClickHandler = () => {
    this.setState({ sidebarOpen: false });
  };
  getFlavorName = flavorChoosen => {
    const choosenFlavor = rapid
      .call("Strain", "getStrainsByFlavor", {
        apiKey: "c3WR8E0",
        flavor: flavorChoosen
      })
      .on("success", flavorToDisplay =>
        this.setState({
          flavorChoosen: flavorToDisplay,
          idChoosen: flavorToDisplay.id
        })
      )
      .on("error", payload => {
        /*YOUR CODE GOES HERE*/
      });
  };
  getMoreDetails = idChoosen => {
    const detailID = rapid
      .call("Strain", "getEffectsByStrainId", {
        strainId: idChoosen,
        apiKey: "c3WR8E0"
      })
      .on("success", flavorID => this.setState({ idChoosen: flavorID }))
      .on("error", payload => {
        /*YOUR CODE GOES HERE*/
      });
  };

  render() {
    let mainOpenClass = "container--wrapper";
    if (this.state.sidebarOpen === false) {
      mainOpenClass = "container--wrapper full";
    }

    let backdrop;
    if (this.state.sidebarOpen) {
      backdrop = <Backdrop clickme={this.backdropClickHandler} />;
    }
    return (
      <div className={mainOpenClass}>
        <Header sidebarClickHandler={this.sidebarClickHandler} />

        <Switch>
          
          <Route
            exact path="/"
            render={() => <Flavors flavorData={this.state.flavorChoosen} />}
          />
        </Switch>

        <Sidebar show={this.state.sidebarOpen} getFlavor={this.getFlavorName} />
        {backdrop}
        <Footer />
      </div>
    );
  }
}
export default App;
