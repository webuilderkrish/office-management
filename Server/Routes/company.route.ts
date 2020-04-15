import { Router } from "express";
import CompanyController from "../Controllers/company.controller";
import companyModel from "../Models/company.model";
import { compareSync } from "bcrypt";

const router: Router = Router();

router.post('/', async (req, res, next) => {
    try {
        const companyAdd = await CompanyController.addCompany(req.body);
        res.json(companyAdd)
    } catch (error) {
        res.json(error)
    }
})



router.get('/', async (req, res, next) => {
    const allCompanies = await CompanyController.getAllCompanies(req.query.page, req.query.size,req.query.search);
    res.json(allCompanies);
})

router.delete('/:id', async (req, res, next) => {
    const deleteComapny = await CompanyController.deleteCompany(req.params.id);
    res.json(deleteComapny);
})

router.get('/:id', async (req, res, next ) => {
    const company = await CompanyController.getCompany(req.params.id);
    res.json(company)
})
export default router;
