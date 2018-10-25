const express = require("express");
const { Router } = express;

//Bounty model
const Bounty = require('../models/bountylist');
const bountyRouter = Router();

bountyRouter.route("/")
    .get((req, res, next) => {
        //ask the database for the right data
        Bounty.find({}, (err, items) => {
            if (err) {
                res.status(400)
                next(err)
            }
            else{
                res.status(200).send(items);
            }
        })
    })
    .post((req, res, next) => {
        //convert request body into a document
        const newBounty = new Bounty(req.body);
        //save the document to the collection (using )=> the model
        newBounty.save((err, savedBounty) => {
            if (err){
                res.status(400)
                next(err)
            }
            else {
                res.status(201).send(savedBounty);
            }
        })
    })
bountyRouter.route("/:id")
    .get((req, res) => {
        Bounty.findById(req.params.id, (err, foundItem) => {
            if (err) {
                res.status(400)
                next(err)
            }
            else{
                res.status(200).send(foundItem)
            }
        })
    })
    .delete((req, res) => {
        Bounty.findByIdAndDelete(req.params.id, (err, deletedBounty) => {
            if (err){
                res.status(400)
                next(err)
            }
            else{
                res.status(204).send()
            }
        })
    })
    .put((req, res) => {
        Bounty.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedBounty) => {
            if (err){
                res.status(400)
                next(err)
            }
            else{
                res.status(200).send(updatedBounty)
            }
        })
    })

    module.exports = bountyRouter;