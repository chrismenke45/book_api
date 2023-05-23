import express, { Router } from 'express';

import bookController from '../controllers/book';

let indexRouter: Router = express.Router();

/* GET home page. */
indexRouter.get('/', bookController.searchBook);

export default indexRouter

