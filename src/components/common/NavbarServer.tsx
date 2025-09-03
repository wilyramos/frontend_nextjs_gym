import { verifySession } from "@/src/auth/dal";
import NavbarClient from "./Navbar";




export default async function NavbarServer() {


    const { user } = await verifySession();

    console.log("NavbarServer - user:", user);

    return (
        <div>
            <NavbarClient />
        </div>
    )
}