
const mongoose = require("mongoose")
const filmSchema = new mongoose.Schema({
    filmName:{
        type: String,
        required: true
    },
    filmPoster:{
        type :String,
        required : true
    },
    releaseYear:{
        type : String,
        required: true
    },
    duration:{
        type:String,
        required: true
    },
    description:{
        type:String,
        requuired: true
    },
    creator:{
        type: String,
        required : true
    },
    starring:{
        type: String,
        required:true
    }
})

const filmDB= mongoose.model("filmdata", filmSchema)
module.exports =filmDB