import companyModel from '../Models/company.model'
import paginationController from '../Controllers/pagination.controller'
export default class CompanyController {

    static async getAllCompanies(page=1,size=10,search="") {
        return new Promise(async (resolve, reject) => {
            const contact:any = await companyModel.find({
                 $or: [{ companyName: {$regex : ".*"+search+".*"} }, { groupCompany: {$regex : ".*"+search+".*"} }, {creator:{$regex : ".*"+search+".*"}} ]
             })
             const response:any = paginationController.pagination(contact, page, size);
             if (response.totalRecord != 0) resolve(response);
             else resolve("No record found")
            
         })


    }


    static async deleteCompany(id) {
        return new Promise(async (resolve, reject) => {
            const company = await companyModel.remove({ _id: id });
            if (company.deletedCount == 0) {
                resolve("company Not Found");
            }
            else resolve('Company Deleted Successfully');
        })
    }

    static async getCompany(id) {
        return new Promise(async (resolve, reject) => {
            const company = await companyModel.find({ _id: id });
            if (company.length != 0) resolve(company);
            else resolve('No company found');
        })
    }
    static async addCompany(company: any) {
        if (company._id == undefined) {
            return new Promise(async (resolve, reject) => {
                await companyModel.create(company)
                    .then(user => {
                        resolve(user);
                    }).catch(err => {
                        resolve(err);
                    })
            })

        }
        else {
            return new Promise(async (resolve, reject) => {
                company.updatedOn = new Date();
                await companyModel.findByIdAndUpdate({ _id: company._id }, company, { new: true, upsert: true, setDefaultsOnInsert: true }, function (error, result) {
                    if (error) {
                        resolve(error);
                    }
                    resolve(result);
                });

            })

        }
    }
}