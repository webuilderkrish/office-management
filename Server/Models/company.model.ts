import { Schema, model } from "mongoose";

const companySchema = new Schema({
    companyName : String,
    groupComapny : String,
    city : String,
    state : String,
    creator : String,
    createdOn : Date,
    updatedOn : Date
})

export default model('companyModel', companySchema, 'companies');  