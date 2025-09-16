

// src/components/auth/AuthButton.tsx
import { verifySession } from "@/src/auth/dal";
import AuthSheet from "../sheets/AuthSheet";
import { MdOutlineSwitchAccount } from "react-icons/md";


export default async function AuthButton() {
    const session = await verifySession().catch(() => null);

    if (session?.isAuth) {
        return (
            <button className="flex items-center gap-2 px-4 py-2 border border-black rounded-lg text-sm bg-gray-100">
                <MdOutlineSwitchAccount />
                {session.user.name}
            </button>
        );
    }

    return <AuthSheet />; 
}