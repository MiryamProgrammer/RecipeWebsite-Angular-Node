import bodyParser from "body-parser";
import { Router } from "express";
import recipeController from "../controllers/recipeController.js";
import { image } from '../upload.js';

const recipeRoute = Router()
recipeRoute.use(bodyParser.json())
recipeRoute.get('/getall', recipeController.getAll)
recipeRoute.get('/getbyid/:id',recipeController.getById)
recipeRoute.post('/add', recipeController.add)
recipeRoute.delete('/delete/:id/:recId', recipeController.deleteRecipe)
recipeRoute.put('/update/:id', recipeController.updateRecipe)
export default recipeRoute