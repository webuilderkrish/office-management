import userModel from '../Models/user.model';
const bcrypt = require('bcryptjs'); 

export default class userController{

    static async getAllUsers() {
        return new Promise(async (resolve, reject) => {
           const contact:any = await userModel.find();
           
           if (contact.length != 0) resolve(contact);
           else resolve('No contact found');
           
        })


    }
    static async getSingleUsers(id) {
        return new Promise(async (resolve, reject) => {
           const contact:any = await userModel.find({ Email: id });
           
           if (contact.length != 0) resolve(contact);
           else resolve('No contact found');
           
        })
    }

    static async addUser( user:any){
        try {
            return new Promise(async (resolve, reject) => {
              
                   await bcrypt.hash(user.Password, 10, async (err, hash)=>{
                        user.Password = hash;
                        function guid() {
                            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
                                var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
                                return v.toString(16);
                            });
                        }
                        user.Guid = guid();
                        user.Username = user.Email;
                        if(err) console.log(err);
                      if (user._id == undefined) {
                        userModel.create(user)
                        .then(user => {
                            resolve (user);
                        }).catch(err => {
                            resolve (err);
                        }) 
                      }
                      else{
                          userModel.findByIdAndUpdate({ _id: user._id }, user, { new: true, upsert: true, setDefaultsOnInsert: true }, function (error, result) {
                            if (error) {
                                resolve(error);
                            }
                            resolve(result);
                        });
                      }  
                        
                    })
                
              
            });
            
        
        } catch (error) {
            return error
        }
    }
}