import { model, Schema } from "mongoose";
import { Iuser } from "../interfeces/user.interfech";

const userSchema = new Schema<Iuser>({
    firstname : {
        type : String,
        required : true,
        trim : true
    },
    lastname : {
        type : String,
        required : true,
        trim : true
    },
    password : {
        type : String,
        required : true,
    },
    email : {
        type : String,
        required : true,
        trim : true
    },
    role : {
        type : String,
        enum : ["user", "admin"],
        default : "user"
    }
    
})

export const User  = model("User", userSchema)