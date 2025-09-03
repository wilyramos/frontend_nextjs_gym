//src/auth/dal.ts

import "server-only"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { UserSchema } from "../types"
import { cache } from "react" // 

// Cache: para evitar que se haga la peticion cada vez que se renderiza el componente

export const verifySession = cache(async () => {

    const token = (await cookies()).get("ecommerce-token")?.value
    if (!token) {
        redirect("/auth/login")
    }

    const url = `${process.env.API_URL}/users/user`;
    const req = await fetch(url, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    const Response = await req.json()
    const ResponseValidation = UserSchema.safeParse(Response);
    if (!ResponseValidation.success) {
        redirect("/auth/login")
    }

    return {
        user: ResponseValidation.data,
        isAuth: true
    }
})