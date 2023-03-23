//controller methods 
import User from '../model/model';
import * as mongoose from 'mongoose';
import {Request ,Response , NextFunction} from 'express';


const createUser = async(req:Request,res:Response,next:NextFunction) => {

    const user = new User({
        name:"yash",
        age:12
    })

    await user.save()
        .then(user => res.send({user}))
        .catch(err => console.log(err));
}

//get all users

const findUsers = async(req:Request,res:Response,next:NextFunction) =>{
    await User.find()
        .then(data => res.send({data}))
        .catch(err => res.send({err}))
}

export { createUser , findUsers }