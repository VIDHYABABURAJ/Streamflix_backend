const express = require('express')
const seriesDB = require('../module/crimeSeriesSchema')
seriesroutes = express.Router()

seriesroutes.post("/add", async(req,res) =>{
    try{
        const data = {
            seriesName : req.body.seriesName,
            releaseYear:req.body.releaseYear,
            numberofSeasons : req.body.numberofSeasons,
            description :req.body.description,
            creator: req.body.creator,
            starring: req.body.starring,
            episode: req.body.episode
        }
        const result =await seriesDB(data).save()

        if(result){
            res.status(201).json({
                success: true,
                error: false,
                message:'Data added successfully'
            })
        }
        else{
            res.status(400).json({
                success: false,
                error: true,
                message:'Data adding failed'
            })

        }
    }catch(e){
        res.status(500).json({
            success: false,
            error: true,
            message:'Something went wrong',
            errorMessage:e.message
        })
    }
})

seriesroutes.get("/view", async (req,res)=>{
    try{
        const seriesdata = await seriesDB.find()

    if(seriesdata){
        res.status(200).json({
            success: true,
            error: false,
            data: seriesdata,
           message: "Data fetched successfully"
        })
    }
    else{
        res.status(400).json({
            success: false,
            error: true,
            data: seriesdata,
           message: "Data fetching failed"
        })
    }
    }catch(e){
        res.status(500).json({
            success: false,
            error: true,
            message: "Something went wrong",
            errorMessage:e.message
        })
    }
})


module.exports= seriesroutes;