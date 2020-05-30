import { set, connect } from "mongoose";

export default async () => {
    try {
        set('useFindAndModify', false);
       
       
       // await connect('mongodb+srv://shubhamdigole:mansi@schoolmanage-p3ck5.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, dbName: "officeManage" });
        await connect('mongodb://localhost:27017/officeManage',{ useNewUrlParser: true })
       
       
        console.log( "Database Connected Successfully")
    } catch (error) {
        console.error(error);
        return false;
    }
}