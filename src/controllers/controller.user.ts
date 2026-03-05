import type { Request, Response } from 'express'; 
import * as userService from '../services/user.services.js'
import type { CreateUserDTO } from '../dtos/user.dto.js';


export async function login(req: Request, res:Response) {
    try{
        const {email, password} = req.body;
        const result = await userService.loginUser(email, password);
        return res.json(result);
    }catch (error: any){
        return res.status(401).json({error: error.message});
    }
}

export async function list(req:Request, res:Response) {
    try{
        const users = await userService.listUsers() 
        return res.json(users)
    }catch{
        return res.status(500).json({error: 'Erro ao listar usuario'})
    }
}

export async function listId(req:Request, res:Response){
    const { id } = req.params
    if(!id || typeof id !== 'string'){
        return res.status(401).json({error: 'Id é obrigatorio e deve ser string'})
    }
    
    const user = await userService.listUsersById(id)
    return res.json(user)
}

export async function createUser(req:Request, res:Response){
    try{
        const data: CreateUserDTO = req.body

        const user = await userService.createUser(data)

        return res.status(201).json(user) 
    }catch(error: any){
        return res.status(400).json({error: error.message}) 
    }
}

export async function updateUser(req:Request, res:Response){
    try{
        const {id} = req.params
        const {name,email,age, password} = req.body

        if(!id || typeof id !== 'string'){
            return res.status(400).json({error: 'Id invalido'})
        }

        const user = await userService.updateUser(id,{
            name,
            email,
            age,
            password
        })
    
    return res.json(user)
}catch(error:any){
    return res.status(400).json({error: error.message})
}
}
export async function remove(req: Request, res: Response) {
  try {
    const { id } = req.params

    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'ID inválido' })
    }

    await userService.deleteUser(id)

    return res.status(204).send()
  } catch (error: any) {
    return res.status(400).json({ error: error.message })
  }
}


