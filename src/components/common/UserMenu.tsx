"use client";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { logoutAction } from "@/app/(public)/auth/actions";
import { FiLogOut } from "react-icons/fi";
import { SlOptionsVertical } from "react-icons/sl";



export default function UserMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
                <SlOptionsVertical className="w-4 h-4 text-gray-500 hover:text-gray-700 cursor-pointer hover:bg-gray-300 hover:rounded-2xl" />
            </DropdownMenuTrigger>

            <DropdownMenuContent
                align="end"
                className="w-44 bg-white border border-gray-200 shadow-md rounded-md"
            >
                <DropdownMenuLabel className="text-xs text-gray-400 px-2">
                    Menu Usuario
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-gray-200" />

                <DropdownMenuItem
                    className="cursor-pointer bg-white hover:bg-gray-100 text-gray-800 flex items-center"
                    onClick={() => logoutAction()}
                >
                    <FiLogOut className="w-4 h-4 mr-2" />
                    Cerrar sesión
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
