import mongoose, { Schema } from "mongoose";

const userModel = new Schema({
    name:{
        type: String,
    },
    uid:{
        type: String,
        required : true,
    },

})

const User = mongoose.model("User", userModel);

export default User;

