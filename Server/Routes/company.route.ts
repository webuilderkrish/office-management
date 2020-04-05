import { Router } from "express";
import ComapnyController from '../Controllers/company.controller'
import CompanyController from "../Controllers/company.controller";

const router : Router = Router();

router.post('/', async(req, res, next) => {
  try {
      const companyAdd = await CompanyController.addCompany(req.body);
      res.json(companyAdd)
  } catch (error) {
      res.json(error)
  }
})

export default router;
