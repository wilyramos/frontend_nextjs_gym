import Logo from "./Logo"
import { ThemeToggle } from "./ThemeToggle"
import UserMenu from "./UserMenu"

export default function NavBarUser({ user }: { user: { name: string } | null }) {
    return (
        <header className="h-14  items-center  shadow-xs flex justify-between  px-10">
            <div className="flex items-center gap-2">
                <Logo />
            </div>

            <div>

                <div className="flex gap-2 text-center items-center">
                    <p className="text-md ">Hola, {user?.name || "Usuario"}</p>
                    <UserMenu />
                    <ThemeToggle />
                </div>

               
            </div>
        </header>
    )
}
