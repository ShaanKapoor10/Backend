import mongoose from "mongoose";
import { number } from "zod";

const userSchema = new mongoose.Schema({
    auth0Id : {
        type:String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    addressLine1: {
        type:String,
    },
    city: {
        type:Number,
    },
    country: {
        type:Number,
    },

});


const User = mongoose.model("User", userSchema);
export default User;