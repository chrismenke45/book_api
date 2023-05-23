import express, { Router } from 'express';

import authController from "../controllers/auth"

let authRouter: Router = express.Router();

/* GET home page. */
authRouter.get('/login', authController.login);

export default authRouter