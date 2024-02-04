const mongoose = require('mongoose')
const microSchema = require('./micro-model')
const { Schema } = mongoose

const partSchema = new Schema(
    {
        name: String,
        option1: String,
        option2: Number,
        description: String,
    }
    
)

module.exports = mongoose.model("part", partSchema)