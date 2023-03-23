import mongoose , { Document, Schema, trusted } from 'mongoose';
import {prop} from '@typegoose/typegoose';

export interface user {      // keeping this interface for validations 
    name:string,
    age:number
}

export interface user_model extends user , Document {};   // document contain default documents like _id , timestamps
//creating the schema
const user_Schema:Schema = new Schema({
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true
    },
})

export default mongoose.model<user_model>("User", user_Schema);
