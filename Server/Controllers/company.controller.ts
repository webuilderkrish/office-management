import companyModel from '../Models/company.model'

export default class CompanyController {

   static async addCompany( company : any){
        try {
            await companyModel.create(company)
            .then(user => {
                return user;
            }).catch(err => {
                return err;
            })

        } catch (error) {
            
        }
   } 
}