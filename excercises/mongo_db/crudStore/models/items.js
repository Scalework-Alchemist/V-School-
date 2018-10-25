const mongoose = require("mongoose");
const { Schema } = mongoose;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    brand:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
    
});


module.exports = mongoose.model("Item" ,itemSchema)