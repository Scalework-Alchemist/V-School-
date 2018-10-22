import React, { Component } from "react";

import RapidAPI from "rapidapi-connect";

var rapid = new RapidAPI(
  "cy-bar_5bc0cf26e4b02d6cfa6a9f3e",
  "db45d472-8bdd-4742-8f8a-7eb4ee4e2d17"
);

export default class Loader extends Component {
  constructor() {
    super();
    this.state = {
      flavors: [],
      loading: true,
      err: null
    };
  }
  componentDidMount() {
    const allFlavors = rapid
      .call("Strain", "getListAllFlavors", {
        apiKey: "c3WR8E0"
      })
      .on("success", flavors => this.setState({ flavors, loading: false }))
      .on("error", function(payload) {
        console.log("shits fucked up homie..., error code: 0001");
      });
  }

  render() {
    const options = this.state.flavors.map((flavor, i) => {
      return (
        <option key={i} value={flavor} onClick={this.props.itemSelect}>
          {flavor}
        </option>
      );
    });
    return <React.Fragment>{options}</React.Fragment>;
  }
}
