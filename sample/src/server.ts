import express from 'express'
import router from './routes/route';
import mongoose from 'mongoose'

const server = express();

server.use(express.json());
server.use("/" ,router);

// added mongo config
mongoose
.connect("mongodb+srv://yashraj7011:1234@cluster0.clmqdv7.mongodb.net/?retryWrites=true&w=majority")
.then(()=> console.log("connected"))
.catch(err => console.log(err));


server.listen(3000, () => console.log("Server Runnning"));

