import  Express  from "express";
import {registerUser,loginUser,getUsers,getsingUser} from "../controler/userController.js";

const router = Express.Router()

router.post('/register',registerUser)

router.post('/login',loginUser)

router.get('/getUser',getUsers)

router.get('/oneUser',getsingUser)




export default router