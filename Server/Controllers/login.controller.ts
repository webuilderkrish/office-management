import userModel from '../Models/user.model';
import { promises, resolve } from 'dns';
import { rejects } from 'assert';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var fs = require('fs');
let token = null;
process.env.SECRET_KEY = 'secret';
const nodemailer = require("nodemailer");



export default class loginController {

  // async..await is not allowed in global scope, must use a wrapper
  public static async main(file, Email) {

    const send = require('gmail-send')({
      user: 'brahmasoftsolutions@gmail.com',
      pass: 'P@ssw0rd@bits',
      to:   Email,
      subject: 'Forgot Password Reset Link',
      html:   file 
    });

    console.log('* [promise-example-1] sending');
 
const result = send() // Using default parameters
  .then((res) => {
    console.log('* [promise-example-1] then: res.result:', res.result);
    // full response from Nodemailer:
    // console.log('* [promise-example-1] then: res.full:', res.full);
  })
  .catch((error) => {
    console.log('ERROR:', error);
    console.log('* [promise-example-1] catch: error:', error);
  })
;
 
 
console.log('* [promise-example-2] sending');
 
const asyncAwaitSend = async() => {
  try {
    const res = await send(); // Using default parameters
    console.log('* [promise-example-2] res.result:', res.result);
    // uncomment to see full response from Nodemailer:
    // console.log('* [promise-example-2] res.full:', res.full);
  } catch (e) {
    console.error('* [promise-example-2] ERROR:', e);
  }
};
asyncAwaitSend();

    // // Generate test SMTP service account from ethereal.email
    // // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();

    // // create reusable transporter object using the default SMTP transport
    // let transporter = nodemailer.createTransport({
    //   host: "smtp.ethereal.email",
    //   port: 587,
    //   secure: false, // true for 465, false for other ports
    //   auth: {
    //     user: testAccount.user, // generated ethereal user
    //     pass: testAccount.pass // generated ethereal password
    //   }
    // });

    // // send mail with defined transport object
    // let info = await transporter.sendMail({
    //   from: '"Fred Foo 👻" <foo@example.com>', // sender address
    //   to: "shubhamdigole@gmail.com", // list of receivers
    //   subject: "Hello ✔", // Subject line
    //   html: file // html body
    // });

    // console.log("Message sent: %s", info.messageId);
    // // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // // Preview only available when sending through an Ethereal account
    // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    // return nodemailer.getTestMessageUrl(info);
  };


  static async forgetPassword(Email: string) {

    await userModel.findOne({
      Email: Email
    })
      .then(async (res: any) => {
        let file =  await fs.readFile('Server/Templates/ForgotPassword.html', 'utf8', function (err, data) {
          if (err) {
            console.log(err);

          }
          return loginController.main(data.replace(/#test#/g,'http://localhost:3000/forgotpassword/' + res.Guid), res.Email);
        });
        return "Mail Sent Succcessfuly";

      })
      .catch(err => {
        return err;
        }
      )

  }

  static async login(user: any): Promise<any> {
    try {
      return new Promise(async (resolve, reject) => {
        await userModel.findOne({
          Email: user.Email
        })
          .then(async (res: any) => {
            if (res) {
              if (await bcrypt.compareSync(user.Password, res.Password)) {
                const payload = {
                  Firstname: res.FirstName,
                  Lastname: res.LastName,
                  email: res.Email,
                  isAdmin: res.isAdmin
                }

                token = await jwt.sign(payload, process.env.SECRET_KEY, {
                  expiresIn: 1400
                })
                let decoded = jwt.verify(token, process.env.SECRET_KEY)

                resolve(token);
              }
              else {
                resolve("Password is Wrong");
              }

            }

            else {
              resolve('Please Check Username');
            }

          })
          .catch(err => {

            resolve('error : ' + err)
          })
      });
    }

    catch (err) {
      return err
    }
  }

}