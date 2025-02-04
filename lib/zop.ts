import { object, string } from "zod"
 
export const loginSchema = object({
  ruc: string({ required_error: "es necesario" })
  .min(11, " es necesario")
  .max(11, " debe contener 11 dígitos")
  .regex(/^\d+$/, " debe contener solo números"),
  usuario: string({ required_error: " es necesario" })
    .min(4, " Incompleto"),
  password: string({ required_error: " es necesario" })    
    .min(4, " debe tener 4 digitos minimo")
    .max(32,  " tiene que contener 32 caracteres como maximo"),
})

export const registroSchema = object({
    email: string({ required_error: "Email es necesario" })
      .min(5, "Email es necesario"),
    password: string({ required_error: "Clave es necesario" })    
      .min(8, "La clave tiene que contener 8 caracteres como minimo")
      .max(32, "La clave tiene que contener 32 caracteres como maximo"),
      nombre: string({ required_error: "Nombre es necesario" })    
  })