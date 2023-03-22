import express from 'express';
import mongoose from 'mongoose';
import http from 'http';
import { config } from './config/config';
import router from './routes/user-route'
const app =express();



//connecting the database using the config
mongoose   
    .connect(config.mongo.url)
    .then(()=>{
        console.log("database connected")
        startServer();
    })
    .catch(err =>{
        console.log("Database connection failed ");
    });


// if mongoose is connected then call this function to start server 
const startServer = () =>{

    app.use(express.urlencoded({extended:true}));
    app.use(express.json());

    app.use("/" , router);

    http.createServer(app).listen(config.server.port, ()=>{
        console.log(`server listening at ${config.server.port}`);
    })
    
};

