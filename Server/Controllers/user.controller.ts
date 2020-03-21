import userModel from '../Models/user.model';
const bcrypt = require('bcryptjs'); 

export default class userController{

    static async addUser( user:any){
        try {
             await userModel.findOne({
                Email:user.Email
            })
            .then(async resp => {
                if (!resp) {
                   await bcrypt.hash(user.Password, 10, async (err, hash)=>{
                        user.Password = hash;
                        function guid() {
                            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                                var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                                return v.toString(16);
                            });
                        }
                        user.Guid = guid();
                        if(err) console.log(err);
                        
                        userModel.create(user)
                        .then(user => {
                            return user;
                        }).catch(err => {
                            return err;
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