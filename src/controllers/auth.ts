import { RequestHandler } from "express";

interface AuthController {
    login: RequestHandler;
}

const authController: AuthController = {
    login(req, res, next) {
        res.send("login route")
    }
}

export default authController