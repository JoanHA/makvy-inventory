
import {z} from "zod"
export const signupShema = z.object({
    username:z.string(),
    password:z.string().min(4).max(50),
    confirmPassword:z.string().min(4).max(50)
}).refine(data => data.password === data.confirmPassword ,{
    message:"Las contraseñas no coinciden",
    path:["confirmPassword"]
} )