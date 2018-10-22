const express = require("express");
const uuid = require("uuid");
const bodyParser = require("body-parser");
const bounties = require("./bounties");

//Ports
const app = express();
const port = 3030;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// endPoints
const mainBountyList = "/api/bounty_list";
const bounty_by_id = "/api/bounty_by_id/:id";
const delete_by_id = "/api/delete_by_id/:id";
//get to whole bounty list
app
    .route(mainBountyList)
    .get((req, res) => {
        res.status(200).send(bounties);
    });
//post to whole bounty list
app.route(mainBountyList).post((req, res) => {
  req.body.id = uuid();
  bounties.push(req.body);
  res.status(204).send(req.body);
});
//get request bounty_by_id
app
  .route(bounty_by_id)
  .get((req, res) => {
    const foundBountyById = bounties.find(
      bounty => bounty.id === req.params.id
    );
    res
      .status(200)
      .send(foundBountyById || { message: `no bounty found by that id` });
  })
// delete request delete_by_id
app
  .route(delete_by_id)
  .delete((req, res) => {
      const deleteById = bounties.splice(
          req.params.id, 1).length;
          res.status(204)
          .send(deleteById + {message :`nice deleted ${delete_by_id}`});
  })
  .put((req, res) => {
    const foundBountyById = bounties.find(bounty => bounty.id === req.params.id);
    const editedbounty = { ...foundBountyById, ...req.body };
    bounties.splice(bounties.indexOf(foundBountyById), 1, editedbounty);
    res.status(200).send(editedbounty);
  });
//how to put request

app.listen(port, () => {
  console.log(`hi im running on local port ${port}`);
});




