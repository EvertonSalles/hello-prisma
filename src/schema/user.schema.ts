import {z} from 'zod';

const userSchema = z.object({
    name: z.string().min(3),
    email: z.email(),
    age: z.number().min(13),
    password: z.string().min(6)
})