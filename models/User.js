//model 들은 대문자로 시작.

const mongoose = require('mongoose');

const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
// const { Schema } = mongoose; //와 똑같다.

const userSchema = new Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: Number,
            default: 0
        },
        token: {
            type: String
        },
        tokenExp: {
            type: Number
        }
    },
    {
        timestamps: true
    }
);

userSchema.pre('save', function(next){
    const user = this;
    const saltFactor = 10;
    bcrypt.genSalt(saltFactor, (err, salt) => {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

module.exports = mongoose.model('User', userSchema);