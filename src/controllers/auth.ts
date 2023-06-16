import { RequestHandler } from "express";
import { UserModel } from "../models/user";
import bcrypt from "bcrypt";
import { getHashes } from "crypto";

interface AuthController {
    login: RequestHandler;
    register: RequestHandler;
}

const authController: AuthController = {
    login(req, res, next) {
        res.send("login route")
    },
    register(req, res, next) {
        bcrypt.hash(req.body.password, Number(process.env.SALT_ROUNDS) || 1)
        .then(hash => {
            let user = new UserModel({
            username: req.body.username,
            hashedPassword: hash,
            })
            user.save()
            .then(theUser => {
                console.log(theUser)
            })
            res.send("register route")
        })
        .catch(err => {
            console.error(err)
            return next(err)
        })
    }
}

export default authController