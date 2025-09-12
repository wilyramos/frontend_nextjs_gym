import Logo from "./Logo"
import UserMenu from "./UserMenu"

export default function NavBarUser({ user }: { user: { name: string } | null }) {
    return (
        <header className="h-14  items-center px-4 shadow-md flex justify-between  ">
            <div className="flex items-center gap-2">
                <Logo />
            </div>

            <div>

                <div className="flex gap-2">
                    <p className="text-sm text-black">Hola, {user?.name || "Usuario"}</p>
                    <UserMenu />
                </div>
            </div>
        </header>
    )
}
