const express = require("express");
const bodyParser = require("body-parser");
const candies = require("./candy.json");
const uuid = require("uuid");

const app = express();

app.use(bodyParser.json());

app
  .route("/api/candies")
  .get((req, res) => {
    res.status(200).send(candies);
  })
  .post((req, res) => {
    req.body.id = uuid();
    candies.push(req.body);
    res.status(201).send(req.body);
  });

app
  .route("/api/candies/:id")
  .get((req, res) => {
    const foundCandy = candies.find(candy => candy.id === req.params.id);
    res
      .status(200)
      .send(
        foundCandy || { message: `No candy with id ${req.params.id} was found` }
      );
  })
  .delete((req, res) => {
    candies.splice(req.params.id, 1).length;
    res.status(204).send();
  })
  .put((req, res) => {
    const foundCandy = candies.find(candy => candy.id === req.params.id);
    const editedCandy = { ...foundCandy, ...req.body };
    candies.splice(candies.indexOf(foundCandy), 1, editedCandy);
    res.status(200).send(editedCandy);
  });

app.listen(8000, () => {
  console.log(`Successfully running on port 8000`);
});
