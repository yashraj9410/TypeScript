import express from 'express';

const app = express();

// get request to display Hello on page on port 2000
app.get("/",(req,res)=>{
    res.send("Hello Get Request");
})

//cerating middlewares 
app.post("/", (req,res)=>{
    res.send("This is the Post request ")
})

// app listening at port 2000
app.listen(2000,()=>{
    console.log(`Running @ 2000`);
})
