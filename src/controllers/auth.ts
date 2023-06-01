import { RequestHandler } from "express";
import { UserModel } from "../models/user";

interface AuthController {
    login: RequestHandler;
    register: RequestHandler;
}

const authController: AuthController = {
    login(req, res, next) {
        res.send("login route")
    },
    register(req, res, next) {
        console.log("**********")
        console.log(req.body)
        let user = new UserModel({
            username: req.body.username,
            hashedPassword: req.body.password,
        })
        user.save().then(theUser => {
            console.log(theUser)
        })
        res.send("register route")
    }
}

export default authController