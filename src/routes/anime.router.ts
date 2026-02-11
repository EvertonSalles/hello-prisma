import { Router } from "express";
import * as animeController from '../controllers/controller.anime.js';

const animeRouter = Router();

animeRouter.post('/animes', animeController.createAnime);

export default animeRouter;