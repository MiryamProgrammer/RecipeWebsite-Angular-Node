import users from '../Model/userModel.js'
import recipes from '../Model/recipeModel.js'
const userController = {
    getAll : (req, res) => {
        try {
            users.find()
            
            .then( (data) => {
                res.status(200).json(data)
            })
            .catch( (err) => {
                console.error("Error in getAll:", err);
                res.status(500).json({ error: err.message });
            })
        }
        catch(e) {
            res.status(500).json(e)
        }
    },

    addUser : (req,res) => {
        try { 
            const newUser = new users(req.body)
            newUser.save()
            .then(k => {
                res.status(200).json(true)
            })
            .catch((err)=> {
                res.status(500).json(err)
            })
        }
        catch(e) {
            res.status(500).json(e)
        }
    },
    addFavoriteRecipe : (req,res) => {
        try {
            const recipeId = req.params.idR
            const userId = req.params.idU
            console.log("recipeId:", recipeId);
            console.log("userId:", userId);
            users.findByIdAndUpdate(userId, { $addToSet : { favorites: recipeId }},{new : true})
            .then( x => {
                if (x) {
                    res.status(200).json(true)
                    console.log("Updated user:", x);

                } else {
                    res.status(404).json({ message: "User not found" })
                }
            })
            .catch((err) => {
                res.status(500).json(err)
            })
        }
        catch(e){
            res.status(500).json(e)
        }
    },
    getByNamePass : (req,res) => {
        try {
            const pass = req.params.pass
            const name = req.params.name
            console.log(pass);
            console.log(name);
            users.findOne({ name: name, password: pass })
                .then( (myuser) => { 
                    if (myuser){
                        res.status(200).json(myuser)
                    }
                    else{
                        res.status(404).json({ message: "User not found" })
                        console.log("no user");
                    }
                })
                .catch( (err) => {
                    res.status(500).json(err+"aaa")
                    console.log("b");
                })
        }
        catch(e) {
            res.status(500).json(e)
            console.log("c");

        }
    },
    getNamesRecipes: async (req,res) => {
        try {
            const userId = req.params.idU
            console.log(userId);
            const user = await users.findById(userId)
            if (!user) {
                return res .status(404).json({ message: "User not found" });
            }
            
            const recipeIds = user.favorites;
            console.log("recipeIds:", recipeIds);
            if (!recipeIds || recipeIds.length === 0) {
                return res.status(200).json("No favorite recipes found");
            }
            
            const list = await recipes.find( { _id: {$in : recipeIds}});
            const names = list.map( (r) => r.name);
            console.log("names:", names);
            return res.status(200).json(names)
        }
        catch(e) {
            res.status(500).json(e)
        }
    }
 }
export default userController