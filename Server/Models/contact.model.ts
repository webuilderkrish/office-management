import { Schema, model } from "mongoose";

const contactSchema = new Schema({
    Name : String,
    Comapny : String,
    creator : String,
    createdOn : Date,
    updatedOn : Date
})

export default model('contactModel', contactSchema, 'contacts');  