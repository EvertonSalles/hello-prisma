import {prisma} from '../../database/prisma.js';

export async function findAllUsers(){
   return prisma.user.findMany() 
}

export async function findUserByID(id: string){
   return prisma.user.findUnique({
      where: {id}
   })
}

export async function findUserByEmail (email:string){
   return prisma.user.findUnique({where: {email}});
}

export async function createUser(name:string, email:string,age:number, password:string){
   return prisma.user.create({
      data:{
         name,
         email,
         age,
         password
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
