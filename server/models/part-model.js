const mongoose = require('mongoose')
const microSchema = require('./micro-model')
const { Schema } = mongoose

const partSchema = new Schema(
    {
        name: String,
        option1: String,
        option2: Number,
        description: String,
        items: {
            type: [microSchema],
            default: undefined
          }
    }
    
)

module.exports = mongoose.model("part", partSchema)