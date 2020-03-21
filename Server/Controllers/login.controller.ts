import userModel from '../Models/user.model';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
let token = null;
process.env.SECRET_KEY = 'secret';


export default class loginController{
    

    static async login(user){
        try{
           
              await userModel.findOne({
                  Email: user.Email
                })
                  .then(async (res:any) => {
                    if (user) {
                      if (await bcrypt.compareSync(user.Password, res.Password)) {
                        const payload = {
                         
                          Firstname: res.Firstname,
                          Lastname: res.Lastname,
                          email: res.Email,
                         
                        }
              
                        token = await jwt.sign(payload, process.env.SECRET_KEY, {
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