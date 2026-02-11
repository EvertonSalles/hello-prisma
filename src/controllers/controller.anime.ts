import type { Request, Response } from 'express'; 
import * as animeService from '../services/anime.services.js'




export async function createAnime(req:Request, res:Response){
    try{
        const {title, genre, userId} = req.body 
        const anime = await animeService.createAnime(title, genre, userId)

        return res.status(201).json(anime) 
    }catch(error: any){
        return res.status(400).json({error: error.message}) 
    }
}

    