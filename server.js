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
const express = require("express");
const body_parser_1 = require("body-parser");
const path_1 = require("path");
const compression = require("compression");
const db_1 = require("./db");
// Routes
const index_1 = require("./Routes/index");
//import user from ""
const user_route_1 = require("./Routes/user.route");
const app = express();
app.use(compression());
app.use(express.static(path_1.join(__dirname, "public")));
app.use(body_parser_1.urlencoded({ extended: true }));
app.use(body_parser_1.json());
app.use("/api/user", user_route_1.default);
app.use("/", index_1.default);
const port = process.env.PORT || 3000;
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.default();
        console.log("server started successfully. on port " + port);
    }
    catch (error) {
        console.error(error);
    }
}));
