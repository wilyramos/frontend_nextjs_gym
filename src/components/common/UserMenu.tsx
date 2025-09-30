"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { logoutAction } from "@/app/(public)/auth/actions";
import { FiLogOut, FiUser } from "react-icons/fi";
import { SlOptionsVertical } from "react-icons/sl";

export default function UserMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
                <SlOptionsVertical className="w-5 h-5 text-muted-foreground hover:text-foreground cursor-pointer" />
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                className="w-52 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-md rounded-lg"
            >
                <DropdownMenuLabel className="text-xs font-medium text-gray-500 px-2">
                    Configuración
                </DropdownMenuLabel>

                <DropdownMenuItem className="cursor-pointer flex items-center gap-2 text-sm">
                    <FiUser className="w-4 h-4" />
                    Perfil
                </DropdownMenuItem>


                <DropdownMenuItem
                    className="cursor-pointer flex items-center gap-2 text-sm text-red-600 hover:bg-red-50 hover:text-red-700"
                    onClick={() => logoutAction()}
                >
                    <FiLogOut className="w-4 h-4" />
                    Cerrar sesión
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
