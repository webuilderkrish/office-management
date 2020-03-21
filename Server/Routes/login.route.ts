import { Router } from "express";
import loginController from "../Controllers/login.controller";

const router : Router = Router();

router.post('/login',async (req, res)=>{
    const resposne = await loginController.login(req.body);
    res.json(resposne);
})