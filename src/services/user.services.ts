import type { CreateUserDTO,UpdateUserDTO, UserResponseDTO } from '../dtos/user.dto.js';
import * as userRepository from '../repositories/user.repository.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const SECRET_KEY = process.env.JWT_SECRET || 'minha_chave_teste';

export async function listUsers(){
    return userRepository.findAllUsers()
}

export async function createUser(data:CreateUserDTO): Promise<UserResponseDTO>{
    
    const {name, email, age, password} = data

    if(!name || !email || !age ){
        throw new Error('Nome e email sao obrigatorios!') 
    }if(age < 13){
        throw new Error ('Idade minima é 13 anos!')
    }if(name.length < 3){
        throw new Error('Nome precisa ter no minimo 3 caracteres!')
    }if(!email.includes('@') || email.length < 3){
        throw new Error('Email precisa incluir @ e ter no minimo 3 caracteres')
    }if(!password || password.length < 6){
        throw new Error('Senha deve ter no minimo 6 caracteres')
    }

    const hashedPassword = await bcrypt.hash(password, 10);



   
    const user = await userRepository.createUser(name, email, age, hashedPassword)

    return {
        id: user.id,
        name: user.name,
        email:user.email,
        age: user.age,
    }

}

export async function loginUser(email: string, password: string) {
    const user = await userRepository.findUserByEmail(email);

    if (!user) {
        throw new Error('E-mail ou senha incorretos');
    }

    // @ts-ignore 
   
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        throw new Error('E-mail ou senha incorretos');
    }

   
    const token = jwt.sign(
        { id: user.id, email: user.email },
        SECRET_KEY,
        { expiresIn: '8h' }
    );

   
    return {
        user: { 
            id: user.id, 
            name: user.name, 
            email: user.email 
        },
        token
    };
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
