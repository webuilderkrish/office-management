import { Router } from "express";
import taskController from "../Controllers/task.controller";

import { compareSync } from "bcrypt";

const router: Router = Router();

router.post('/', async (req, res, next) => {
    try {
        const taskAdd = await taskController.addtask(req.body);
        res.json(taskAdd)
    } catch (error) {
        res.json(error)
    }
})



router.get('/', async (req, res, next) => {

    const allCompanies = await taskController.getAllCompanies();
    res.json(allCompanies);
})

router.delete('/:id', async (req, res, next) => {
    const deleteComapny = await taskController.deletetask(req.params.id);
    res.json(deleteComapny);
})

router.get('/:id', async (req, res, next ) => {
    const task = await taskController.gettask(req.params.id);
    res.json(task)
})
export default router;
