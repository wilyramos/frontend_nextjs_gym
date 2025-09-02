import { z } from "zod";


// **** AUTH **** 

export const registerSchema = z.object({
    email: z.string()
        .email({ message: 'Email no válido' }),
    name: z.string()
        .min(1, { message: 'El nombre es obligatorio' }),
    password: z.string()
        .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
});

export type TRegister = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
    email: z.string()
        .email({ message: 'Email no válido' }),
    password: z.string()
        .min(6, { message: 'La contraseña debe tener al menos 6 caracteres' }),
});

export type TLogin = z.infer<typeof loginSchema>;


// *** USERS ***


//Enums

export const UserRoleEnum = z.enum(["CLIENT", "ADMIN", "TRAINER"]);
export const AuthProviderEnum = z.enum(["LOCAL", "GOOGLE"]);

export const UserSchema = z.object({
    id: z.number(),
    name: z.string().min(1, "El nombre es obligatorio"),
    email: z.string().email(),
    role: UserRoleEnum,
    provider: AuthProviderEnum,
    googleId: z.string().nullable(),
});
// Crear usuario (frontend → backend)
export const UserCreateSchema = z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "La contraseña debe tener mínimo 6 caracteres"),
    role: UserRoleEnum.optional().default("CLIENT"),
    provider: AuthProviderEnum.optional().default("LOCAL"),
});

// Actualizar usuario (parcial)
export const UserUpdateSchema = UserCreateSchema.partial();


// -----------------
export type TUser = z.infer<typeof UserSchema>;
export type TUserCreate = z.infer<typeof UserCreateSchema>;
export type TUserUpdate = z.infer<typeof UserUpdateSchema>;

// *** PAGINATION

export const PaginationMetaSchema = z.object({
    total: z.number(),
    page: z.number(),
    limit: z.number(),
    totalPages: z.number(),
});

export const createPaginatedSchema = <T extends z.ZodTypeAny>(entitySchema: T) =>
    z.object({
        data: z.array(entitySchema),
        total: z.number(),
        page: z.number(),
        limit: z.number(),
        totalPages: z.number(),
    });

export const PaginatedUsersSchema = createPaginatedSchema(UserSchema);
export type TPaginatedUsers = z.infer<typeof PaginatedUsersSchema>;
