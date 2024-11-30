
import {z} from "zod"
import { ZodIssue } from "zod";
z.setErrorMap((issue, ctx) => {
    const errorMessages = {
      invalid_union: "El valor no coincide con ninguna de las opciones permitidas.",
      invalid_arguments: "Los argumentos proporcionados son inválidos.",
      invalid_return_type: "El tipo de retorno es inválido.",
      invalid_date: "La fecha es inválida.",
      invalid_string: "La cadena es inválida.",
      too_small: {
        string: `El texto debe tener al menos ${issue.minimum} caracteres.`,
        number: `El número debe ser mayor o igual a ${issue.minimum}.`,
        array: `El arreglo debe contener al menos ${issue.minimum} elementos.`,
      }[issue.type],
      too_big: {
        string: `El texto debe tener como máximo ${issue.maximum} caracteres.`,
        number: `El número debe ser menor o igual a ${issue.maximum}.`,
        array: `El arreglo debe contener como máximo ${issue.maximum} elementos.`,
      }[issue.type],
      custom: "Valor inválido.",
      invalid_intersection_types: "Los tipos de intersección son inválidos.",
    };
  
    // Fallback genérico
    return { message: errorMessages[issue.code] || "Error no reconocido." };
  });
 export const signupShema = z.object({
    username:z.string().min(3),
    password:z.string().min(4).max(50),
    confirmPassword:z.string().min(4).max(50)
}).refine(data => data.password === data.confirmPassword ,{
    message:"Las contraseñas no coinciden",
    path:["confirmPassword"]
} )
