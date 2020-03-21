import userModel from '../Models/user.model';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
let token = null;

export default class loginController{
    

    static async login(user){
        try{
           
                userModel.findOne({
                  Email: user.Email
                })
                  .then((res:any) => {
                    if (user) {
                      if (bcrypt.compareSync(user.Password, res.Password)) {
                        const payload = {
                         
                          Firstname: res.Firstname,
                          Lastname: res.Lastname,
                          email: res.Email,
                         
                        }
              
                        token = jwt.sign(payload, process.env.SECRET_KEY, {
                          expiresIn: 1400
                        })
                        let decoded = jwt.verify(token, process.env.SECRET_KEY)
              
                        return(token)
                      } else {
                       return({ error:'Password is Wrong'})
                      }
              
                    } else {
                     return({ error:'Please Check Username'})
                    }
              
                  })
                  .catch(err => {
              
                   return('error : ' + err)
                  })
              }  
        
        catch(err)
        {
            return err
        }
    }
}