import express, { Request, Response, Router, NextFunction } from 'express';

let indexRouter: Router = express.Router();

/* GET home page. */
indexRouter.get('/', function(req: Request, res: Response, next: NextFunction) {
  res.send('Books API');
});

export default indexRouter

