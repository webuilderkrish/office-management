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

router.get('/', async(req, res, next) => {
    try {
        
        const GetAllRecord = await userController.getAllUsers();
        res.json(GetAllRecord);
    } catch (error) {
        res.json(error)
    }
})

router.get('/:id', async(req, res, next) => {
    try {
        const GetUserRecord = await userController.getSingleUsers(req.params.id);
        res.json(GetUserRecord);
    } catch (error) {
        res.json(error)
    }
})

export default router;