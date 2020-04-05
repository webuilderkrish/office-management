import contactModel from '../Models/contact.model'

export default class contactController {

    static async getAllCompanies(){
        return new Promise(async (resolve, reject) => {
             await contactModel
            .find(function (err, list) {
                   // if there is an error retrieving, send the error. nothing after res.send(err) will execute
                   if (err) {
                      resolve (err)
                   }
                   else {
                      resolve (list)
                   }
               });
             
           })

       
    }

     
    static async deletecontact(id){
        return new Promise(async (resolve, reject) => {
           const contact = await contactModel.remove({_id: id});
           if (contact.deletedCount == 0) {
           resolve ("contact Not Found");
           }  
           else resolve ('contact Deleted Successfully'); 
        })
    } 
       
    static async getcontact(id){
        return new Promise(async (resolve, reject) => {
            const contact = await contactModel.find({_id: id});
            if(contact.length != 0) resolve (contact);
            else resolve ('No contact found');   
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
                await contactModel.findByIdAndUpdate({_id: contact._id}, contact, {new: true, upsert: true, setDefaultsOnInsert: true}, function(error, result) {
                    if(error){
                        resolve (error);
                    }
                    resolve (result);
                });    
     
            })

        }
    }
}