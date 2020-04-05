import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    Name : String,
    comapny : String,
    status : Boolean,
    createdOn : Date,
    updatedOn : Date
})

export default model('taskModel', taskSchema, 'tasks');  