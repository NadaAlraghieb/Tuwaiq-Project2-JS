const mongoose = require("mongoose");
require("dotenv").config()

mongoose.connect(process.env.DB_URI,(err)=>{
    console.log("database connected")
})