import { string, z } from "zod";


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
    phone: z.string().nullable(),
    document: z.string().nullable(),
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
    phone: z.string().nullable().optional(),
    document: z.string().nullable().optional(),
    // googleId: z.string().nullable().optional(),
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


// SUBSCRIPTION


export enum SubscriptionPlanEnumValues {
  MONTHLY = "MONTHLY",
  TRIMESTRAL = "TRIMESTRAL",
  YEARLY = "YEARLY",
  PREMIUM = "PREMIUM",
}

// Enums según tu entidad
export const SubscriptionPlanEnum = z.enum([
    "MONTHLY",
    "TRIMESTRAL",
    "YEARLY",
    "PREMIUM",
]);

export const SubscriptionStatusEnum = z.enum([
    "PENDING",
    "ACTIVE",
    "PAST_DUE",
    "CANCELED",
    "EXPIRED",
]);

// Tipo para Payment (simplificado, adapta según tu entidad Payment)
export const PaymentSchema = z.object({
    id: z.number().optional(),
    method: z.enum(["card", "mercadopago", "paypal"]).optional(),
    status: z.enum(["pending", "success", "failed"]).optional(),
    amount: z.number().optional(),
    date: z.date().optional(),
    transactionId: z.string().optional(),
});

// Tipo para Membership (simplificado, adapta según tu entidad Membership)
export const MembershipSchema = z.object({
    id: z.number().optional(),
    type: z.string().optional(),
    startDate: z.date().optional(),
    endDate: z.date().optional(),
});

// Esquema principal de Subscription
export const SubscriptionSchema = z.object({
    id: z.number().optional(),
    userId: z.number().optional(),
    plan: SubscriptionPlanEnum,
    status: SubscriptionStatusEnum,
    startDate: string().optional(),
    endDate: string().nullable().optional(),
    externalId: string().nullable().optional(),
    payments: z.array(PaymentSchema).optional(),
    membership: MembershipSchema.optional(),
});

// Tipos TypeScript generados automáticamente
export type Subscription = z.infer<typeof SubscriptionSchema>;
export type Payment = z.infer<typeof PaymentSchema>;
export type Membership = z.infer<typeof MembershipSchema>;
export type SubscriptionPlan = z.infer<typeof SubscriptionPlanEnum>;
export type SubscriptionStatus = z.infer<typeof SubscriptionStatusEnum>;
