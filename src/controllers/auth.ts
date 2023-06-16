import { RequestHandler } from "express"
import { UserModel } from "../models/user"
import bcrypt from "bcrypt"

interface AuthController {
  login: RequestHandler
  register: RequestHandler
}

let findUser = async function (username: string) {
  let usernameAlreadyUser = await UserModel.find({ username: username })
  return usernameAlreadyUser
}

const authController: AuthController = {
  login(req, res, next) {
    res.send("login route")
  },
  register(req, res, next) {
    findUser(req.body.username).then((usernameAlreadyUser) => {
      if (usernameAlreadyUser.length !== 0) {
        res.status(422).json({ message: "Username already taken" })
      } else {
        bcrypt
          .hash(req.body.password, Number(process.env.SALT_ROUNDS) || 1)
          .then((hash) => {
            let user = new UserModel({
              username: req.body.username,
              hashedPassword: hash,
            })
            user.save().then((theUser) => {
              console.log(theUser)
            })
            res.send("register route")
          })
          .catch((err) => {
            console.error(err)
            return next(err)
          })
      }
    })
  },
}

export default authController
