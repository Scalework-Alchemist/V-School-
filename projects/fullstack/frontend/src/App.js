import React, { Component } from "react";
import Navbar from "./components/Navbar/Navbar";
import BookList from './components/BookList/BookList';

class App extends Component {
  render() {
    return (
      <div >
        <Navbar />
        <div >
        <BookList/>
        </div>
        <footer>®</footer>
      </div>
    )
  }
}
export default App;
