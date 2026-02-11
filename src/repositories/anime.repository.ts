import {prisma} from '../../database/prisma.js';


export async function createAnime(title:string, genre:string, userId:string){
   return prisma.anime.create({
      data:{
         title,
         genre,
         userId
      }
   })
   
}