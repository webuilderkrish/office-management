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
const express_1 = require("express");
const login_controller_1 = require("../Controllers/login.controller");
const router = express_1.Router();
router.post('/login', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield login_controller_1.default.login(req.body);
        res.json(user);
    }
    catch (error) {
        res.json(error);
    }
}));
router.get('/forgetpassword/:email', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const guid = yield login_controller_1.default.forgetPassword(req.params.email);
        res.json(guid);
    }
    catch (error) {
        res.json(error);
    }
}));
exports.default = router;
//# sourceMappingURL=login.route.js.map