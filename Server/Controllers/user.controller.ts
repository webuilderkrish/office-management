import userModel from '../Models/user.model';

export default class userController{

    static async addUser( user:any){
        try {
            const inserted_user = await userModel.insertMany([user]);
            return inserted_user[0].toObject();

        } catch (error) {
            return error
        }
    }
}