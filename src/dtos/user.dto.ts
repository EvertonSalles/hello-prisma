export interface CreateUserDTO{
    name:string
    email:string
    age:number
    password:string
}


export type UpdateUserDTO = Partial<CreateUserDTO>

export interface UserResponseDTO{
    id:string
    name:string
    email:string
    age:number
}

