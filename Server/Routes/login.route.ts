import { Router } from "express";
import loginController from "../Controllers/login.controller";

const router: Router = Router();

router.post('/login', async (req, res, next) => {

    try {
        const user = await loginController.login(req.body);
        res.json(user)

    }
    catch (error) {
        res.json(error)
    }

})
router.get('/forgetpassword', async (req, res, next) => {
    try{
        const guid =  await loginController.main();
        res.json(guid)
    }
    catch(error){
        res.json(error)
    }
})

export default router;