import { prop, getModelForClass } from '@typegoose/typegoose';
import * as mongoose from 'mongoose';

// using the class for model
class user {
    @prop({required:true})
    public name ?: string;

    @prop({required:true})
    public age ?: number;
}

export default getModelForClass(user);
