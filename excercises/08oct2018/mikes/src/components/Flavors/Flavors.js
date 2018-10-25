import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import "./Main.css";
import "./CARD.css";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const cardStyles = {
  root: {
    width: "50%",
  }
};

const CustomCard = withStyles(cardStyles)(Card);

const Flavors = props => {
  const handleLearnMore = event => {
    console.log(`im being clicked ${event}`);
  };

  const flavorComponents = props.flavorData.map((flavor, i) => (
    <CustomCard key={i}>
      <h3>{flavor.name}</h3>
      <div className="discription">
        <label>discription</label>
        <ul>
          <li>Flavor: {flavor.flavor}</li>
          <li />
          <li>
            I.D #:
            {flavor.id}
          </li>
        </ul>
      </div>
      <div className="buttonContainer">
        <Button
          value={flavor.id}
          onClick={handleLearnMore}
          variant="[contained | fab]"
          color="inherit"
        >
          Learn More
        </Button>
      </div>
    </CustomCard>
  ));
  return <div className="main">{flavorComponents}</div>;
};

export default Flavors;
