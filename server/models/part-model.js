const mongoose = require('mongoose')
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