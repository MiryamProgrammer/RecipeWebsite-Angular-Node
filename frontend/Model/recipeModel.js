import mongoose from "mongoose";
import recipeValidator from '../validators/recipeValidator.js'
const recipes = mongoose.Schema({
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
        required : true,
        validate:{
            validator:(v) => recipeValidator.checkName(v)
        }
    },
    description:{
        type: String,
        required:false
    },
    pic:{
        type:String,
        required : false,
    },
    level:{
        type:String,
        required : false,
        validate:{
            validator:(v) => recipeValidator.checkLevel(v)
        }
    },
    duration:{
        type:String,
        required : false,
    },
    type:{
        type:String,
        required : false,
        validate:{
            validator:(v) => recipeValidator.checkType(v)
        }
    },
    idUser:{
        type: String,
        ref: 'usersCollection'
    },
    ingredients:[{
        name:{type:String, required :false},
        amount: { type: Number, required : false}
    }]
})
export default mongoose.model('recipesCollection', recipes)
