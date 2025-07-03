import bodyParser from "body-parser";
import { Router } from "express";
import userController from "../controllers/userController.js";
import userMiddleware from '../userMiddleware.js'



const usersRoute = Router()
usersRoute.use(bodyParser.json())
usersRoute.get('/getall',userController.getAll)
usersRoute.get('/getbypn/:pass/:name',userController.getByNamePass)
usersRoute.post('/add',userMiddleware,userController.addUser)
usersRoute.post('/addfavorite/:idR/:idU',userController.addFavoriteRecipe)
usersRoute.get('/names/:idU', userController.getNamesRecipes)

export default usersRoute