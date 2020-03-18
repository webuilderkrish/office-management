import { Schema, model } from "mongoose";

const userSchema = new Schema({
    Usename: String,
    FirstName:String,
    LastName:String,
    DateCreated:Date,
    DateUpdated:Date,
    Email:String,
    isAdmin:Boolean
})

export default model('userModel', userSchema, 'users');  