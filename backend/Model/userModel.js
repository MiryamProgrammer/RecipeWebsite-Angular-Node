
import mongoose from "mongoose";
import userValidator from '../validators/userValidator.js'

const users = mongoose.Schema({
    _id: {
        type: String,
        required: true,
        validate: {
            validator: (v) => /^[0-9a-zA-Z]+$/.test(v),
                message: "Invalid userId format"
            }
    },

    name:{
        type:String,
        required:true,
        validate:{
            validator:(v) => userValidator.checkName(v)
        }
    },
    password:{
        type: String,
        required: true,
        validate:{
            validator:(v) => userValidator.checkPass(v)
        }
    },
    address:{
        type: String,
        required: false,
        validate:{
            validator:(v) => userValidator.checkAddress(v)
        }
    },
    phone:{
        type: String,
        required: true,
        validate:{
            validator: (v) => userValidator.checkPhone(v)
        }
    },
    isManager:{
        type: Boolean,
        },
    favorites: [String]
})
export default mongoose.model('usersCollection', users)