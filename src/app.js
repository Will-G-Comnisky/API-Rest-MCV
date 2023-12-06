import express from "express"
import cors from "cors"
import UserController from "./app/controllers/UserController.js"

const app = express()

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use(cors())


app.post('/login', UserController.login)


export default app 