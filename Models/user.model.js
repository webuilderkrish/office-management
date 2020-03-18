"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    Usename: String,
    FirstName: String,
    LastName: String,
    DateCreated: Date,
    DateUpdated: Date,
    Email: String,
    isAdmin: Boolean
});
exports.default = mongoose_1.model('userModel', userSchema, 'users');
