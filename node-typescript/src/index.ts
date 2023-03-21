import express from 'express';

const app = express();

app.get("/",(req,res)=>{
    res.send("Hello");
})

app.listen(2000,()=>{
    console.log(`Running @ 2000`);
})
