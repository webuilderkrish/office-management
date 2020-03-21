import userModel from '../Models/user.model';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
let token = null;
process.env.SECRET_KEY = 'secret';


export default class loginController{
    

    static async login(user:any): Promise<any>{
        try{
            return new Promise(async (resolve, reject) => { 
              await userModel.findOne({
                  Email: user.Email
                })
                  .then(async (res:any) => {
                    if (res) {
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
              
                        resolve (token);
                      }
                       else {
                        resolve ("Password is Wrong");
                      }
              
                    } 
                    
                    else {
                        resolve ('Please Check Username');
                    }
              
                  })
                  .catch(err => {
              
                   resolve ('error : ' + err)
                  })
              } ); 
            }
        
        catch(err)
        {
            return err
        }
    }

}