 import express from 'express'
 import dotenv from 'dotenv'
 import cors from 'cors'
import mongoose from 'mongoose'
import usersRoute from './routes/usersRoute.js'
import recipeRoute from './routes/recipeRoute.js'
 const app = express()


app.use( express.static( 'picture' ))
dotenv.config();
app.use(cors())
app.use(express.json())
app.use('/users', usersRoute)
app.use('/recipe', recipeRoute)
// app.use('/recipes', rec)
mongoose.connect('mongodb://0.0.0.0:27017/RecipsProject')
.then( () => {
    console.log("connect");    
})
.catch( (err) => {
    console.log(err);
})
app.listen(process.env.PORT, () => {
    console.log("run" + process.env.PORT);
    
})
