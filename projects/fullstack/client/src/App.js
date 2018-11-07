import React, { Component } from "react";
// import Navbar from "./components/Navbar/Navbar";
import BookList from "./components/BookList/BookList";
import CharactersList from "./components/Characters/CharactersList";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";



class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={BookList} />
          <Route path="/characters" component={CharactersList} />
        </Switch>
        <footer>®</footer>
      </div>
    );
  }
}
export default App;
