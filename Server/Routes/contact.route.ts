import { Router } from "express";
import contactController from "../Controllers/contact.controller";
import { compareSync } from "bcrypt";

const router: Router = Router();

router.post('/', async (req, res, next) => {
    try {
        const contactAdd = await contactController.addcontact(req.body);
        res.json(contactAdd)
    } catch (error) {
        res.json(error)
    }
})

router.get('/', async (req, res, next) => { 

    const allCompanies = await contactController.getAllContacts(req.query.page, req.query.size,req.query.search);
    res.json(allCompanies);
})

router.delete('/:id', async (req, res, next) => {
    const deleteComapny = await contactController.deletecontact(req.params.id);
    res.json(deleteComapny);
})      

router.get('/:id', async (req, res, next ) => {
    const contact = await contactController.getcontact(req.params.id);
    res.json(contact)
})
export default router;
