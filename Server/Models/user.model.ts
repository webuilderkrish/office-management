import { Schema, model } from "mongoose";

const userSchema = new Schema({
    Usename: String,
    FirstName:String,
    LastName:String,
    DateCreated: {
        type: Date,
        default: Date.now
    },
    DateUpdated:{
        type: Date,
        default: Date.now
    },
    Email:String,
    Password:String,
    isAdmin:Boolean,
    Guid:String
})

export default model('userModel', userSchema, 'users');  