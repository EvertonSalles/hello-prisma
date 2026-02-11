import type { CreateUserDTO,UpdateUserDTO, UserResponseDTO } from '../dtos/user.dto.js';
import * as userRepository from '../repositories/user.repository.js';


export async function listUsers(){
    return userRepository.findAllUsers()
}

export async function createUser(data:CreateUserDTO): Promise<UserResponseDTO>{
    
    const {name, email, age} = data

    if(!name || !email || !age){
        throw new Error('Nome e email sao obrigatorios!') 
    }if(age < 13){
        throw new Error ('Idade minima é 13 anos!')
    }if(name.length < 3){
        throw new Error('Nome precisa ter no minimo 3 caracteres!')
    }if(!email.includes('@') || email.length < 3){
        throw new Error('Email precisa incluir @ e ter no minimo 3 caracteres')
    }

   
    const user = await userRepository.createUser(name, email, age)

    return {
        id: user.id,
        name: user.name,
        email:user.email,
        age: user.age
    }

}

export async function updateUser(
    id:string,
    data:UpdateUserDTO
)
{
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
