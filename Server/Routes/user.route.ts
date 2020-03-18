import { Router } from "express";
import userController from "../Controllers/user.controller";

const router : Router = Router();

router.post('/', async(req, res, next)=>{
    try {
        const user_add = await userController.addUser(req.body);
        res.json(user_add);
    } catch (error) {
        res.json(error)
    }
})

export default router;