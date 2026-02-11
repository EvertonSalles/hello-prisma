import express from 'express';
import userRouter from './routes/user.router.js'
import animeRouter from './routes/anime.router.js'
const app = express();

app.use(express.json());
app.use(userRouter); 
app.use(animeRouter)


app.listen(3333, ()=>{
    console.log('Servidor rodando na porta http://localhost:3333');
})