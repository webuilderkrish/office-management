import userModel from '../Models/user.model';
import { utimesSync } from 'fs';
const bcrypt = require('bcryptjs'); 

export default class userController{

    public static guid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
            return v.toString(16);
        });
    }
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

    static async updatePassword(Password, guid){
        try {
            return new Promise(async (resolve, reject) => {
              
                 
                const user:any = await userModel.find({ Guid: guid });
                user.Guid = this.guid();
                user.DateUpdated = Date.now();
                await bcrypt.hash(Password, 10, async (err, hash)=>{
                    user.Password = hash;
                })
                userModel.findByIdAndUpdate({ _id: user._id }, user, { new: true, upsert: true, setDefaultsOnInsert: true }, function (error, result) {
                            if (error) {
                                resolve(error);
                            }
                            resolve(result);
                        });
                      } );   
        } 
        catch (error) {
            return error
        }
    }

    static async addUser( user:any){
        try {
            return new Promise(async (resolve, reject) => {
              
                   await bcrypt.hash(user.Password, 10, async (err, hash)=>{
                        user.Password = hash;
                      
                        user.Guid = this.guid();
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