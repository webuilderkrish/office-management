import contactModel from '../Models/contact.model'
import paginationController from '../Controllers/pagination.controller'
import { response } from 'express';

export default class contactController {

    static async getAllCompanies(page,size,search) {
        return new Promise(async (resolve, reject) => {
           const contact:any = await contactModel.find({
                $or: [{ name: {$regex : ".*"+search+".*"} }, { company: {$regex : ".*"+search+".*"} }, {creator:{$regex : ".*"+search+".*"}} ]
            })
            const response = paginationController.pagination(contact, page, size);
            resolve (response);
        })


    }


    static async deletecontact(id) {
        return new Promise(async (resolve, reject) => {
            const contact = await contactModel.remove({ _id: id });
            if (contact.deletedCount == 0) {
                resolve("contact Not Found");
            }
            else resolve('contact Deleted Successfully');
        })
    }

    static async getcontact(id) {
        return new Promise(async (resolve, reject) => {
            const contact = await contactModel.find({ _id: id });
            if (contact.length != 0) resolve(contact);
            else resolve('No contact found');
        })
    }
    static async addcontact(contact: any) {
        if (contact._id == undefined) {
            return new Promise(async (resolve, reject) => {
                await contactModel.create(contact)
                    .then(user => {
                        resolve(user);
                    }).catch(err => {
                        resolve(err);
                    })
            })

        }
        else {
            return new Promise(async (resolve, reject) => {
                contact.updatedOn = new Date();
                await contactModel.findByIdAndUpdate({ _id: contact._id }, contact, { new: true, upsert: true, setDefaultsOnInsert: true }, function (error, result) {
                    if (error) {
                        resolve(error);
                    }
                    resolve(result);
                });

            })

        }
    }
}