const mongoose = require('mongoose');

const {connectDB} = require('../db/db');
connectDB();

// importing schema 
const Schema = mongoose.Schema;

//  defining schema

const fileSchema = new Schema({
    filename: { type: String, required: true },
    path: { type: String, required: true },
    size: { type: Number, required: true },
    uuid: { type: String, required: true },
    sender: { type: String, required: false },
    receiver: { type: String, required: false },
}, { timestamps: true });


// assigning schema to a table named files. we can use model to add , remove data 
const model = mongoose.model('file', fileSchema);

module.exports={model};
