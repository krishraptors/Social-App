import mongoode from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            require: true,
            min: 2,
            max: 50,
        },
        lastname: {
            type: String,
            require: true,
            min: 2,
            max: 50,
        },
        email: {
            type: String,
            require: true,
            max: 50,
            
        },

    }
)