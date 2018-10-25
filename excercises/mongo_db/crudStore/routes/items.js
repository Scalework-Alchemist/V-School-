
const express = require("express");
const { Router } = express; 

//item model
const Item = require('../models/items');
const itemRouter = Router();

itemRouter.route("/")
    .get((req, res, next) => {
        //ask the dATABASE for the right data and send it back to the client
        Item.find({}, (err, items) => {
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
        const newItem = new Item(req.body);
        //save the document to the collection (using )=> the model
        newItem.save((err, savedItem) => {
            if (err){
                res.status(400)
                next(err)
            }
            else {
                res.status(201).send(savedItem);
            }
        })
    })
/* 
    this is the find by id,
    delete, and put request.
*/
itemRouter.route("/:id")
    .get((req, res) => {
        Item.findById(req.params.id, (err, foundItem) => {
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
        Item.findByIdAndDelete(req.params.id, (err, deletedItem) => {
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
        Item.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedItem) => {
            if (err){
                res.status(400)
                next(err)
            }
            else{
                res.status(200).send(updatedItem)
            }
        })
    })

    module.exports = itemRouter;