const mongoose = require("mongoose");
const { Schema } = mongoose

const bountySchema = new Schema({
    first_name: {
        required: true,
        type: String,
    },
    last_name: {
        required: true,
        type: String,
    },
    living:{
        type: Boolean,
        default: true,
    },
    image:String,
    species: String, 
    reward: Number,
    _url:String
});

module.exports = mongoose.model("Bounty", bountySchema)