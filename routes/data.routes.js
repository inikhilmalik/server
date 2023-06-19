const express=require("express");
const { DataModel } = require("../models/data.model");

const dataRouter=express.Router();

dataRouter.get("/",async(req,res)=>{
    try{
        const data=await DataModel.find();
        res.send(data)
    }
    catch(err){
        res.send({"err":err})
    }
})

module.exports={dataRouter}