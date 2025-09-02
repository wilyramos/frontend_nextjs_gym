import { z } from "zod";


export const registerSchema  = z.object({
    email: z.string()
        .email({ message: 'Email no válido' }),
    name: z.string()
        .min(1, { message: 'El nombre es obligatorio' }),
    password: z.string()
        .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
});

export type TRegister = z.infer<typeof registerSchema >;

export const loginSchema = z.object({
    email: z.string()
        .email({ message: 'Email no válido' }),
    password: z.string()
        .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
});

export type TLogin = z.infer<typeof loginSchema>;