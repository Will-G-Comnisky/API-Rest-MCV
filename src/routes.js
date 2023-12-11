import { Router } from "express";
import UserController from "./app/controllers/UserController.js"


const router = Router();

//Consultando Users/user (Read)
router.get("/", UserController.hello)
router.get("/user", UserController.index)
router.get("/user/:id", UserController.show)

//Salvando user (Create)
router.post("/user", UserController.store)

// Realizando login
router.post('/login', UserController.login)

//Alterando Autor (Update)
router.put("/user/:id", UserController.update)

//Apagando Autor (Delete)
router.delete("/user/:id", UserController.delete)

export default router