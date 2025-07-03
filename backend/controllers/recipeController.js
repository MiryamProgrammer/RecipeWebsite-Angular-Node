import recipes from "../Model/recipeModel.js"
import users from "../Model/userModel.js"


const recipeController = {
    getAll : (req,res) => {
        try {
            recipes.find()
            .then( (data) => {
                res.status(200).json(data)
            })

            .catch( (err) => {
                res.status(500).json({error: err.massage})
            })
        }
        catch(e) {
            res.status(500).json(e)
        }
    },
    getById : (req,res) => {
        try {
            recipes.findOne({_id:req.params.id})
            .then( (r) => {
                res.status(200).json(r)
            })
            .catch( (err) => {
                res.status(500).json(err)
            })
        }
        catch(e){
            res.status(500).json(e)
        }
    },
     add : (req,res) => {
        try {
           
            const recipe = new recipes(req.body);            
            recipe.save()
            .then( k => {
                res.status(200).json(true)
            })
            .catch((err) => {
                console.log("0001");
                res.status(500).json(err)
            })
        }
        catch(e) {
            console.log("000");
            res.status(500).json(e +"000")
        }
    },
    deleteRecipe : (req, res) => {
        try{
            console.log("deleteRecipe called with params:", req.params);
            users.findOne({_id: req.params.id})
            .then( (user) => {
                console.log(user);
                if (user.isManager === true) {
                    recipes.deleteOne({_id : req.params.recId})
                    .then( () => {
                        res.status(200).json(true)
                        console.log("Recipe deleted successfully by manager"); 
                    })
                    .catch( (err) => {
                        res.status(500).json({error: err.message})
                        console.log("By manager: Error deleting recipe:", err.message); 
                    })
                }
                else{
                    recipes.findOne({_id: req.params.recId})
                    .then( (recipe) => {
                        if ( recipe.userId == req.params.id) {
                            recipes.deleteOne({_id : req.params.recid})
                            .then( () => {
                                res.status(200).json(true)
                                console.log("Recipe deleted successfully by user"); 
                            })
                            .catch( (err) => {
                                res.status(500).json({error: err.message})
                                console.log("By user: Error deleting recipe:", err.message); 
                            })
                        }
                        else {
                            res.status(403).json({error: "You are not authorized to delete this recipe"})
                            console.log("User is not authorized to delete this recipe");    
                        }
                    })
                }
            })
            .catch( (err) => {
                res.status(500).json({error: err.message})
                console.log("Error finding user:", err.message); 
            })
        }
        catch(e) {
            res.status(500).json(e)
            console.log("Error in deleteRecipe:", e); 
        }
    },
    updateRecipe : (req,res) => {
        try {
            console.log("updateRecipe called with params:", req.params);
            console.log("updateRecipe called with body:", req.body);
            recipes.updateOne( {_id : req.params.id}, {$set : req.body})
            .then( () => {
                console.log("Recipe updated successfully");
                return res.status(200).json(true);
            })
            .catch((err) => {
                res.status(500).json({error: err.message})
                console.log("Error updating recipe:", err.message); 
            })
        }
        catch(e) {
            res.status(500).json(e)
            console.log("Error in updateRecipe:", e);
        }
    }



}
export default recipeController