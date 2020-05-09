import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    name : String,
    status : {
        type: Boolean,
        default: false
    },
    createdOn :{
        type: Date,
        default: Date.now()
    },
    updatedOn : {
        type: Date,
        default: Date.now()
    },
    date:{
        type:Date,
        default:Date.now()
    },
    isStarred :{
        type:Boolean,
        default:false
    }    
}) 

export default model('taskModel', taskSchema, 'tasks');  