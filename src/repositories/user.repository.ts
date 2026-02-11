import {prisma} from '../../database/prisma.js';

export async function findAllUsers(){
   return prisma.user.findMany() 
}

export async function createUser(name:string, email:string,age:number){
   return prisma.user.create({
      data:{
         name,
         email,
         age
      },
   })
}

export async function updateUser(
   id:string,
   data:{
      name?: string
      email?: string
      age?: number
   }
){
   return prisma.user.update({
      where: {id}, 
      data,
   })
}


export async function deleteUser(id: string) {
  return prisma.user.delete({
    where: {
      id,
    },
  })
}
