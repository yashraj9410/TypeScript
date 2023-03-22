import mongoose from 'mongoose';
import  User  from '../models/user'
import {NextFunction , Request , Response} from 'express';


// create  a new user 
const create_user = async(req:Request,res:Response,next:NextFunction) => {
    const { name ,age} =req.body;

    const user = new User({
        _id:new mongoose.Types.ObjectId(),
       name,
       age
    })

    return await user.save()
                    .then(user => {res.status(200).send({user})})
                    .catch(err => {
                        res.status(401).send(err);
                    })

}


// find user by id 
const read_user = async(req:Request,res:Response,next:NextFunction) => {
    const id = req.params.id;

    return await User.findById(id)
                    .then(data => {res.status(200).send({data})}) 
                    .catch(err => {res.status(404).json({err})})

                    
}

//read all user 
const read_Alluser = async(req:Request,res:Response,next:NextFunction) => {
    // const id = req.params.id;

    return await User.find()
                    .then(data => {res.status(200).send({data})}) 
                    .catch(err => {res.status(404).json({err})})

                    
}

// update a user by id 
const update_user = async(req:Request,res:Response,next:NextFunction) => {
    const id = req.params.id;

    return await User.findById(id)
                    .then(user => {

                        if(user){
                            user.set(req.body);

                            return user.save()
                                    .then(user => {res.status(200).json({user})})
                                    .catch(err => {res.status(403).json({err})})
                        } else {

                            res.status(500).json({message:"Not Found"});
                        }
                        
                    })
                    .catch(err =>{
                        res.status(500).json({err})
                    });
};


const delete_user = async(req:Request,res:Response,next:NextFunction) => {
    const id = req.params.id;

    return await User.findByIdAndDelete(id)
                        .then((user) => {user ? res.status(200).json({message:"User deleted"}) : res.status(401).json({message:"user not found"})})
                        .catch(err => {res.status(404).json({message:"Not found"})})

}

export default { create_user , read_user , update_user , delete_user , read_Alluser}