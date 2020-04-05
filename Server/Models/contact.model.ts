import { Schema, model } from "mongoose";

const contactSchema = new Schema({
    name : String,
    comapny : String,
    creator : String,
    createdOn : Date,
    updatedOn : Date
})

export default model('contactModel', contactSchema, 'contacts');  