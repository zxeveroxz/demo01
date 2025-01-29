import { object, string } from "zod"
 
export const loginSchema = object({
  email: string({ required_error: "Email es necesario" })
    .min(5, "Email es necesario")
    .email("Correo invalido"),
  password: string({ required_error: "Clave es necesario" })    
    .min(8, "La clave tiene que contener 8 caracteres como minimo")
    .max(32, "La clave tiene que contener 32 caracteres como maximo"),
})

export const registroSchema = object({
    email: string({ required_error: "Email es necesario" })
      .min(5, "Email es necesario")
      .email("Correo invalido"),
    password: string({ required_error: "Clave es necesario" })    
      .min(8, "La clave tiene que contener 8 caracteres como minimo")
      .max(32, "La clave tiene que contener 32 caracteres como maximo"),
      nombre: string({ required_error: "Nombre es necesario" })    
  })