import { verifySession } from "@/src/auth/dal"
import NavbarClient from "./Navbar";




export default async function NavbarServer() {


    const { user } = await verifySession();



    return (
        <div>
            <NavbarClient isLoggedIn={!!user} />
        </div>
    )
}