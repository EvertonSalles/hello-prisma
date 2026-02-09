import * as userRepository from '../repositories/user.repository.js';

export async function listUsers(){
    return userRepository.findAllUsers()
}

export async function createUser(name:string, email:string, age:number){
    if(!name || !email || !age){
        throw new Error('Nome e email s]ao obrigatorios')
    }

    return userRepository.createUser(name, email, age)
}

export async function updateUser(
    id:string,
    data:{
        name?:string
        email?:string
        age?: number
    }
){
    if(!id){
        throw new Error('ID é obrigatorio')
    }
    if(Object.keys(data).length === 0){
        throw new Error('Envie ao menos um campo para atualizar')
    }
    return userRepository.updateUser(id,data);
}

export async function deleteUser(id:string){
    if(!id){
        throw new Error('Id é obrigatorio')
    }
    return userRepository.deleteUser(id)
}