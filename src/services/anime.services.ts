import * as animeRepository from '../repositories/anime.repository.js';



export async function createAnime(title:string, genre:string, userId:string){
    if(!title || !genre || !userId){
        throw new Error ('Titulo, ID e genero sao obrigatorios');
    }
    return animeRepository.createAnime(title,genre, userId);
}

