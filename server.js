const express = require("express")
const mongoose = require("mongoose")
const filmroutes = require('./routes/filmroutes')
const seriesroutes = require('./routes/seriesroutes')
const app = express()
const PORT = 8989

mongoose.connect("mongodb+srv://vidhyababurajvidhya:CvPBq6VB0YUeZ4cg@streamflix.zmsrgmh.mongodb.net/").then(()=>{
    console.log("Database Connected Successfully");
}).catch((error)=>{
    console.log(error);
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/api/film', filmroutes)
app.use('/api/series', seriesroutes)


app.listen(PORT, () => {
    console.log(`server is running on http://localhost:${PORT}/`)
})
