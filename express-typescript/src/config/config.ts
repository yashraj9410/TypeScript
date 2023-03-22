import dotenv from 'dotenv';

dotenv.config();

const PORT =2200;
const mongo_url = 'mongodb+srv://yash:1234@cluster0.3iqbpit.mongodb.net/?retryWrites=true&w=majority'

export const config = {
    mongo:{
        url:mongo_url
    },
    server:{
        port:PORT 
    }
};