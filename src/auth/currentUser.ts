import "server-only";
import { UserSchema } from "../types";
import getToken from "./token";


export async function getCurrentUser() {

    const token = await getToken();
    if (!token) return null;

    const url = `${process.env.API_URL}/users/me`
    const req = await fetch(url, {
        headers: {
            'Authorization': `Bearer ${token}`
        },
        // next: { revalidate: 60 } // Revalida cada 60 segundos
    })
    const res = await req.json()

    const validation = UserSchema.safeParse(res);
    if (!validation.success) {
        return null
    }
    return validation.data;
}