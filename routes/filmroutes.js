const express = require("express")
const filmDB = require("../module/filmSchema")

const filmroutes = express.Router()

filmroutes.post("/add", async(req,res) =>{ 
    try{
        const data ={
            filmName: req.body.filmName,
            filmPoster:req.body.filmPoster,
            releaseYear : req.body.releaseYear,
            duration: req.body.duration,
            description:req.body.description,
            creator: req.body.creator,
            starring: req.body.starring
        }
        const result = await filmDB(data).save()
        

     if(result){
        res.status(201).json({
            success : true,
            error : false,
            message:'Data added successfully'
        })
    }
    else{
        res.status(400).json({
            success : false,
            error: true,
            message:"Data adding failed"
        })
    }
    }catch(e){
        res.status(500).json({
            success :false,
            error:true,
            message:"Something went wrong",
            errormessage:error
        })
    }

})

module.exports = filmroutes;
