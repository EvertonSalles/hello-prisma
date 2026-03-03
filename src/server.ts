import express from 'express';
import userRouter from './routes/user.router.js'
import animeRouter from './routes/book.router.js'
import { errorMiddleware } from './middlewares/error.middleware.js';
import { error } from 'node:console';

const app = express();

app.use(express.json());
app.use(userRouter); 
app.use(animeRouter)


app.listen(3333, ()=>{
    console.log('Servidor rodando na porta http://localhost:3333');
})

app.use(errorMiddleware);