import mongoose, {Schema} from "mongoose";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt"

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullName: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        index: true
    },
    avatar: {
        type: String, // cloudanary
        required: true
    },
    coverImage: {
        type: String, // cloudanary
    },
    watchHistory: {
        type: Schema.Types.ObjectId,
        ref: "Video"
    },
    password: {
        type: String,
        required: [true, "Password is required"] 
    },
    refreshToken: {
        type: String
    }
    
},{timestamps: true})

userSchema.pre("save", async function (next) {
    if (!this.ismodified("password")) return next;
    this.password = bcrypt.hash(this.password, 10)
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function () {
    return Jwt.sign({
        _id: this._id,
        _email: this._email,
        _username: this._username,
        _fullName: this._fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}
userSchema.methods.generateRefreshToken = function () {
    return Jwt.sign({
        _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const user = mongoose.model("User", userSchema)