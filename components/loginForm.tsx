"use client"
import { useRouter } from "next/navigation";
import { z } from "zod";
import { loginSchema } from "@/lib/zop";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,  
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"



const LoginForm = () => {

  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      ruc: "",
      usuario: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    
    try {
        const response = await fetch("https://movil.jsjfact.com/appi/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
        });

        const data = await response.json();

        if (response.ok) {
            console.log("Inicio de sesión exitoso:", data);
            document.cookie = `token=${data.token}; path=/; secure; samesite=strict`;
            router.push("/dash"); // Redirigir a /panel
        } else {
            console.error("Error en el login:", data.error);
        }
    } catch (error) {
        console.error("Error de red:", error);
    }
}

  return (
    
    <div >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
        
            control={form.control}
            name="ruc"
            render={({ field }) => (
              <FormItem>
                <FormLabel>RUC</FormLabel> <FormMessage className="inline" />
                <FormControl >
                  <Input
                    type="number" 
                    className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                    placeholder="Ingrese su RUC" {...field} />
                </FormControl>

                
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="usuario"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Usuario</FormLabel> <FormMessage className="inline" />
                <FormControl>
                  <Input
                    type="text" 
                    className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                    placeholder="Ingrese su Usuario" {...field} />
                </FormControl>          
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Clave</FormLabel> <FormMessage className="inline" />
                <FormControl >
                  <Input
                    type="password"
                    className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
                    placeholder="***" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default LoginForm