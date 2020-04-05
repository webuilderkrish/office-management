import { Schema, model } from "mongoose";

const contactSchema = new Schema({
    name : String,
    company : String,
    creator : String,
    createdOn :{
        type: Date,
        default: Date.now
    },
    updatedOn : {
        type: Date,
        default: Date.now
    }
})

export default model('contactModel', contactSchema, 'contacts');  