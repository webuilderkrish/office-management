"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_model_1 = require("../Models/user.model");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var fs = require('fs');
let token = null;
process.env.SECRET_KEY = 'secret';
const nodemailer = require("nodemailer");
class loginController {
    // async..await is not allowed in global scope, must use a wrapper
    static main() {
        return __awaiter(this, void 0, void 0, function* () {
            // Generate test SMTP service account from ethereal.email
            // Only needed if you don't have a real mail account for testing
            let testAccount = yield nodemailer.createTestAccount();
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: "smtp.ethereal.email",
                port: 587,
                secure: false,
                auth: {
                    user: testAccount.user,
                    pass: testAccount.pass // generated ethereal password
                }
            });
            // send mail with defined transport object
            let info = yield transporter.sendMail({
                from: '"Fred Foo 👻" <foo@example.com>',
                to: "shubhamdigole@gmail.com",
                subject: "Hello ✔",
                text: "Hello world?",
                html: "<b>Hello world?</b>" // html body
            });
            console.log("Message sent: %s", info.messageId);
            // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
            // Preview only available when sending through an Ethereal account
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
            // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            return nodemailer.getTestMessageUrl(info);
        });
    }
    ;
    static forgetPassword(Email) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield user_model_1.default.findOne({
                    Email: Email
                })
                    .then((res) => {
                    resolve(res.Guid);
                    this.main();
                })
                    .catch(err => {
                    resolve(err);
                });
            }));
        });
    }
    static login(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    yield user_model_1.default.findOne({
                        Email: user.Email
                    })
                        .then((res) => __awaiter(this, void 0, void 0, function* () {
                        if (res) {
                            if (yield bcrypt.compareSync(user.Password, res.Password)) {
                                const payload = {
                                    Firstname: res.FirstName,
                                    Lastname: res.LastName,
                                    email: res.Email,
                                    isAdmin: res.isAdmin
                                };
                                token = yield jwt.sign(payload, process.env.SECRET_KEY, {
                                    expiresIn: 1400
                                });
                                let decoded = jwt.verify(token, process.env.SECRET_KEY);
                                resolve(token);
                            }
                            else {
                                resolve("Password is Wrong");
                            }
                        }
                        else {
                            resolve('Please Check Username');
                        }
                    }))
                        .catch(err => {
                        resolve('error : ' + err);
                    });
                }));
            }
            catch (err) {
                return err;
            }
        });
    }
}
exports.default = loginController;
//# sourceMappingURL=login.controller.js.map