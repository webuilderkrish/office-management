import { NextFunction } from "express";

export default class PAginationController {

    static pagination(model:[], page, limit){
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        var result =  {
            list:[],
            totalRecord:model.length
        };
        result.list = model.splice(startIndex,endIndex);
        return result;
    }
}