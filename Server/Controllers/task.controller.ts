import taskModel from '../Models/task.model'

export default class taskController {
    
    static async getAllCompanies() {
        return new Promise(async (resolve, reject) => {
            await taskModel
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


    static async deletetask(id) {
        return new Promise(async (resolve, reject) => {
            const task = await taskModel.remove({ _id: id });
            if (task.deletedCount == 0) {
                resolve("task Not Found");
            }
            else resolve('task Deleted Successfully');
        })
    }

    static async gettask(id) {
        return new Promise(async (resolve, reject) => {
            const task = await taskModel.find({ _id: id });
            if (task.length != 0) resolve(task);
            else resolve('No task found');
        })
    }
    static async addtask(task: any) {
        if (task._id == undefined) {
            return new Promise(async (resolve, reject) => {
                await taskModel.create(task)
                    .then(user => {
                        resolve(user);
                    }).catch(err => {
                        resolve(err);
                    })
            })

        }
        else {
            return new Promise(async (resolve, reject) => {
                task.updatedOn = new Date();
                await taskModel.findByIdAndUpdate({ _id: task._id }, task, { new: true, upsert: true, setDefaultsOnInsert: true }, function (error, result) {
                    if (error) {
                        resolve(error);
                    }
                    resolve(result);
                });

            })

        }
    }
}