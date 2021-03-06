const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const beautifyUnique = require('mongoose-beautiful-unique-validation');

const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if(validator.isEmpty(value)) {
                throw new Error('Please enter a name');
            }
        }
    },
    password: {
        type: String,
        minlength: 6,
        trim: true,
        required: [true, 'Password is required']
    },
    email: {
        type: String,
        required: true,
        unique: 'Email already in use ({VALUE})',
        lowercase: true,
        validate(value) {
                if(!validator.isEmail(value)) {
                    throw new Error('Email is not valid')
                }
        }
    },
    profileImage: {
        type: String
    },
    favs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }],
    dateOfBirth: {
        type: Date
    },
    tokens: [{
        token: {
            type: String,
            required: true
        } 
    }],
    admin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
})

userSchema.plugin(beautifyUnique);

userSchema.methods.toJSON = function() {
    const user = this;
    const userObject = user.toObject();  

    delete userObject.password;
    delete userObject.tokens;

    return userObject;
}

userSchema.methods.generateToken = async function(){
    const user = this;
    const token = jwt.sign({_id: user._id.toString()}, process.env.JWT_SECRET)
    user.tokens = user.tokens.concat({ token: token });
    await user.save();

    return token;
}

userSchema.statics.findByCredentials = async (email, password) => {
    const user =  await User.findOne({ email: email });
    if(!user) {
        throw new Error("Wrong credentials");
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) {
        throw new Error("Wrong credentials")
    }

    return user;
}

userSchema.pre('save', async function(next) {
    const user = this;
    
    if(user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }
    next();
})

const User = mongoose.model('User', userSchema);

module.exports = User;