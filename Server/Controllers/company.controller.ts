import companyModel from '../Models/company.model'

export default class CompanyController {

    static async getAllCompanies() {
        return new Promise(async (resolve, reject) => {
            await companyModel
                .find(function (err, list) {
                    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
                    if (err) {
                        resolve(err)
                    }
                    if (list.length != 0) resolve(list);
                    else resolve("No record found")

                });

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