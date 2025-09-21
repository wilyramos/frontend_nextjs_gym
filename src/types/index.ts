import { z, string } from "zod";

/* ======================
   🔐 AUTH
====================== */
export const registerSchema = z.object({
    email: z.string().email({ message: "Email no válido" }),
    name: z.string().min(1, { message: "El nombre es obligatorio" }),
    password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
});
export type TRegister = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
    email: z.string().email({ message: "Email no válido" }),
    password: z.string().min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
});
export type TLogin = z.infer<typeof loginSchema>;

/* ======================
   👤 USERS
====================== */


// Change password

export const changePasswordSchema = z.object({
    currentPassword: string().min(1, { message: "La contraseña actual es obligatoria" }),
    newPassword: string().min(6, { message: "La contraseña debe tener al menos 6 caracteres" }),
    confirmNewPassword: string().min(1, { message: "Debe confirmar la nueva contraseña" }),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Las contraseñas no coinciden",
});

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

export const UserCreateSchema = z.object({
    name: z.string().min(1, "El nombre es obligatorio"),
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "La contraseña debe tener mínimo 6 caracteres"),
    role: UserRoleEnum.optional().default("CLIENT"),
    provider: AuthProviderEnum.optional().default("LOCAL"),
    phone: z.string().nullable().optional(),
    document: z.string().nullable().optional(),
});

export const UserUpdateSchema = UserCreateSchema.partial();

export type TUser = z.infer<typeof UserSchema>;
export type TUserCreate = z.infer<typeof UserCreateSchema>;
export type TUserUpdate = z.infer<typeof UserUpdateSchema>;

/* ======================
   📑 PAGINATION
====================== */
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

/* ======================
   📦 SUBSCRIPTION
====================== */
export const SubscriptionPlanEnum = z.enum(["MONTHLY", "TRIMESTRAL", "YEARLY", "PREMIUM"]);
export type SubscriptionPlan = z.infer<typeof SubscriptionPlanEnum>;

export const SubscriptionStatusEnum = z.enum(["PENDING", "ACTIVE", "PAST_DUE", "CANCELED", "EXPIRED"]);
export type SubscriptionStatus = z.infer<typeof SubscriptionStatusEnum>;

export const SubscriptionSchema = z.object({
    id: z.number().optional(),
    userId: z.number().optional(),
    plan: SubscriptionPlanEnum,
    status: SubscriptionStatusEnum,
    startDate: string().optional(),
    endDate: string().nullable().optional(),
    externalId: string().nullable().optional(),
    payments: z.array(z.any()).optional(), // luego se enlaza con Payment
    membership: z.any().optional(),        // relación con Membership
    gateway: z.enum(["MERCADOPAGO", "PAYPAL", "STRIPE"]).optional(),
});
export type Subscription = z.infer<typeof SubscriptionSchema>;

/* ======================
   💳 PAYMENTS
====================== */
export const paymentMethodEnum = z.enum(["CARD", "CASH", "PAYPAL", "ADMIN"]);
export const paymentStatusEnum = z.enum(["PENDING", "APPROVED", "FAILED", "REFUNDED"]);
export const paymentGatewayEnum = z.enum(["MERCADOPAGO", "PAYPAL", "STRIPE"]);

const paymentBaseSchema = z.object({
    amount: z.coerce.number().positive(),
    currency: z.string().min(1).default("PEN"),
    method: paymentMethodEnum.default("CARD"),
    status: paymentStatusEnum.default("PENDING"),
    paymentDate: z.coerce.date().default(() => new Date()),
    externalId: z.string().nullable().optional(),
    gateway: paymentGatewayEnum.default("MERCADOPAGO"),
    attempt: z.number().int().positive().default(1),
});

export const paymentSchema = paymentBaseSchema.extend({
    id: z.number().int().positive(),
    subscription: SubscriptionSchema.optional(),
});
export type TPayment = z.infer<typeof paymentSchema>;

export const paymentCreateSchema = paymentBaseSchema.extend({
    subscription: SubscriptionSchema.required(),
});
export type TPaymentCreate = z.infer<typeof paymentCreateSchema>;

export const paymentUpdateSchema = paymentBaseSchema.partial().extend({
    status: paymentStatusEnum.optional(),
});
export type TPaymentUpdate = z.infer<typeof paymentUpdateSchema>;

export const paymentsArraySchema = z.array(paymentSchema);
export type TPaymentArray = z.infer<typeof paymentsArraySchema>;

/* ======================
   🏋️ MEMBERSHIPS
====================== */
export const membershipStatusEnum = z.enum(["ACTIVE", "PAUSED", "EXPIRED"]);

const membershipBaseSchema = z.object({
    status: membershipStatusEnum.default("ACTIVE"),
    validFrom: z.string().optional(),
    validTo: z.string().optional(),
});

export const membershipSchema = membershipBaseSchema.extend({
    id: z.number().int().positive(),
    user: UserSchema.optional(),
    subscription: SubscriptionSchema.nullable().optional(),
});

export const MembershipArraySchema = z.array(membershipSchema);

export const membershipCreateSchema = membershipBaseSchema.extend({
    userId: z.number().int().positive(),
    subscriptionId: z.number().int().positive().optional().nullable(),
});

export const membershipUpdateSchema = membershipBaseSchema.partial().extend({
    status: membershipStatusEnum.optional(),
    validFrom: z.string().optional(),
    validTo: z.string().optional(),
    subscriptionId: z.number().int().positive().nullable().optional(),
});

export type Membership = z.infer<typeof membershipSchema>;
export type MembershipArray = z.infer<typeof MembershipArraySchema>;
export type MembershipCreateInput = z.infer<typeof membershipCreateSchema>;
export type MembershipUpdateInput = z.infer<typeof membershipUpdateSchema>;

// User with memberships whit pagination

export const UserWithMembershipsSchema = UserSchema.extend({
    memberships: z.array(membershipSchema).optional(),
});

export const PaginatedUsersWithMembershipsSchema = createPaginatedSchema(UserWithMembershipsSchema);

export type TUserWithMemberships = z.infer<typeof UserWithMembershipsSchema>;
export type TPaginatedUsersWithMemberships = z.infer<typeof PaginatedUsersWithMembershipsSchema>;
