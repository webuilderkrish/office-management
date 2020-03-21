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
class loginController {
    static login(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                user_model_1.default.findOne({
                    Email: user.Email
                })
                    .then((res) => {
                    if (user) {
                        if (bcrypt.compareSync(user.Password, res.Password)) {
                            const payload = {
                                Firstname: res.Firstname,
                                Lastname: res.Lastname,
                                email: res.Email,
                            };
                            token = jwt.sign(payload, process.env.SECRET_KEY, {
                                expiresIn: 1400
                            });
                            let decoded = jwt.verify(token, process.env.SECRET_KEY);
                            return (token);
                        }
                        else {
                            return ({ error: 'Password is Wrong' });
                        }
                    }
                    else {
                        return ({ error: 'Please Check Username' });
                    }
                })
                    .catch(err => {
                    return ('error : ' + err);
                });
            }
            catch (err) {
                return err;
            }
        });
    }
}
exports.default = loginController;
//# sourceMappingURL=login.controller.js.map