import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import bookRouter from './src/routes/book';
import authRouter from './src/routes/auth';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;


app.use('/', bookRouter);
app.use('/auth', authRouter)

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});