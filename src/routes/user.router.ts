import {Router} from 'express';
import * as userController from '../controllers/controller.user.js'

const userRouter = Router();
const animeRouter = Router();


userRouter.get('/users', userController.list)
userRouter.post('/users', userController.createUser)
userRouter.put('/users/:id', userController.updateUser)
userRouter.delete('/users/:id', userController.remove)



export default userRouter;

