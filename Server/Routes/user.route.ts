import { Router } from "express";
import userController from "../Controllers/user.controller";

const router: Router = Router();

router.post('/', async (req, res, next) => {
    try {

        const user_add = await userController.addUser(req.body);
        res.json(user_add);
    } catch (error) {
        res.json(error)
    }
})

router.get('/checkmail/:email', async (req, res) => {
    try {
        const Mail = await userController.checkMail(req.params.email);
        res.json(Mail)
    }
    catch (err) {
        res.json(err);

    }
})
router.post('/updatepassword', async (req, res) => {
    try {
        const updatepassword = await userController.updatePassword(req.query.password, req.query.guid);
        res.json(updatepassword)
    }
    catch (err) {
        res.json(err);

    }
})

router.get('/', async (req, res, next) => {
    try {

        const GetAllRecord = await userController.getAllUsers();
        res.json(GetAllRecord);
    } catch (error) {
        res.json(error)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        const GetUserRecord = await userController.getSingleUsers(req.params.id);
        res.json(GetUserRecord);
    } catch (error) {
        res.json(error)
    }
})

export default router;