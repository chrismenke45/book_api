import { RequestHandler } from "express";

interface AuthController {
    login: RequestHandler;
    register: RequestHandler;
}

const authController: AuthController = {
    login(req, res, next) {
        res.send("login route")
    },
    register(req, res, next) {
        res.send("register route")
    }
}

export default authController