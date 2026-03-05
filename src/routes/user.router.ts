import {Router} from 'express';
import * as userController from '../controllers/controller.user.js'


const userRouter = Router();
;


userRouter.get('/users', userController.list)
userRouter.get('/users/:id', userController.listId)
userRouter.post('/users', userController.createUser)
userRouter.put('/users/:id', userController.updateUser)
userRouter.delete('/users/:id', userController.remove)


userRouter.post('/login', userController.login);


export default userRouter;

