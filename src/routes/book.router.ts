import { Router } from 'express';
import * as bookController from '../controllers/controller.book.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';

const bookRouter = Router();

bookRouter.get('/books', bookController.list);
bookRouter.post('/books', authMiddleware, bookController.create);

export default bookRouter;