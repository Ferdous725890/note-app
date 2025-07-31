import { model, Schema } from "mongoose";
import { IAddress, Iuser } from "../interfeces/user.interfech";
import validator from "validator";
import { string } from "zod";


const addreessSchema = new Schema<IAddress>({
  city : {type : String},
  state : {type : String},
  zip : {type : Number},
},
{
  _id : false
}

)


const userSchema = new Schema<Iuser>({
  firstname: {
    type: String,
    required: [true, "First Name Must Be Need "],
    trim: true,
    minlength: 3,
    maxlength: 20,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },

  age: {
    type: Number,
    required: true,
    min: [18, `must be lest 18 , got {VALUE}`],
    max: 20,
  },

  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    validate: [validator.isEmail, "invalid email {VALUE}"],
  },

  addreess: {
 type : addreessSchema
  },

  //     validate : {
  //         validator : function (value) {
  //             return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  //         },
  //         message : function(props) {
  //             return `Email ${props.value} is not valid email`
  //         }
  //     }
  //   },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: {
      values: ["user", "admin"],
      message: `Role is not valid, got {VALUE} role`,
    },
    default: "user",
  },
});

export const User = model("User", userSchema);
