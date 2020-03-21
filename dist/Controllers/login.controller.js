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
let token = null;
process.env.SECRET_KEY = 'secret';
class loginController {
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
                                console.log(res);
                                const payload = {
                                    Firstname: res.Firstname,
                                    Lastname: res.Lastname,
                                    email: res.Email,
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