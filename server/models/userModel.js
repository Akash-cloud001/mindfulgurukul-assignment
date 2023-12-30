import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique: true
        },
        phone:{
            type:Number,
            required:true
        },
        gender:{
            type:String,
            required:true
        },
        hearAboutUs:{
            type:Array,
            required:false
        },
        city:{
            type:String,
            required:true
        },
        state:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        data:{
            type:Array,
            required:false
        }
    },
    {
        timeStamps:true
    }
)

export const User = mongoose.model('User', userSchema);