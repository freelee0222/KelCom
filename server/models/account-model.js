const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require('bcrypt')
const SALT = 10

const memberSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        age: Number,
        phone: String,
        password: String,
        email: { type: String, unique: true }
    },
    { timestamps: true }
)

memberSchema.pre('save', function(next) {
    const user = this
    bcrypt.genSalt(SALT, function(err, salt) {
        if(err) return next(err)
        bcrypt.hash(user.password, salt, function(err, hash){
            if(err) return next(err)
            user.password = hash
            next()
        })
    })
})

memberSchema.methods.comparePassword = function(loginPass, callBack) {
    bcrypt.compare(loginPass, this.password, function(err, isMatch){
        if(err) return callBack(err)
        callBack(null, isMatch)
    })
}

module.exports = mongoose.model("member", memberSchema)