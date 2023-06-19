const express=require("express");
const { connection } = require("./db");
const { dataRouter } = require("./routes/data.routes");
const app=express();
app.use(express.json());
const cors=require("cors")
app.use(cors())
require("dotenv").config();
const port=process.env.PORT||8080;

app.get("/",(req,res)=>{
    res.send("homepage")
})

app.use("/data",dataRouter)

app.listen(port,async()=>{
    try{
        await connection;
        console.log("connected to DB")
    }
    catch(err){
        console.log(err);
        console.log("cannot connected to DB")
    }
    console.log("server is running at port 8080")
})