import userModel from '../Models/user.model';
import bcrypt from 'bcryptjs'

export default class userController{

    static async addUser( user:any){
        try {
            const inserted_user = await userModel.findOne({
                Email:user.Email
            })
            .then(resp => {
                if (!resp) {
                    bcrypt.hash(user.Password, 10, async (err, hash)=>{
                        user.Password = hash;
                       await userModel.create(user)
                        .then(user => {
                            return user;
                        })
                    })
                }
                else {
                    return 'User Already Exist'
                }
            });
            

        } catch (error) {
            return error
        }
    }
}