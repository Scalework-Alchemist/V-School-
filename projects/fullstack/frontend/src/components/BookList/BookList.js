import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import BookCard from "./BookCard";

export default class BookList extends Component {
  state = {
    allBooks: [],
    searchString: ""
  };
  constructor() {
    super();
    this.getBooks()
  }
  getBooks = () => {
    axios.get("api/modelList/")
      .then(response => {
        this.setState({ allBooks: response.data });
      })
      .catch(error => {
      console.log("cant fetch");
      console.log(error);
      });
  };
  onSearchInputChange = event => {
    if (event.target.value) {
      this.setState({ searchString: event.target.value });
    } else {
      this.setState({ searchString: "" });
    }
    this.getBooks();
  };
  render() {
    return (
      <div>
        {this.state.allBooks ? (
          <div>
            <TextField
              style={{ padding: 24 }}
              id="searchInput"
              placeholder="Quary A Book"
              margrin="normal"
              onChange={this.onSearchInputChange}
            />
            <Grid container spacing={24} style={{ padding: 24 }}>
              {this.state.allBooks.map(currentBook => (
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <BookCard allBooks={currentBook} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          "no Books Found"
        )}
      </div>
    );
  }
}
