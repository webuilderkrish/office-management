import { Schema, model } from "mongoose";

const companySchema = new Schema({
    companyName : String,
    groupCompany : String,
    city : String,
    state : String,
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

export default model('companyModel', companySchema, 'companies');  