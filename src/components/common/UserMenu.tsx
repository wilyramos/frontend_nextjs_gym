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
import { CgOptions, CgLogOut  } from "react-icons/cg";


export default function UserMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
                <CgOptions className="w-6 h-6 hover:text-gray-800 cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel className="text-gray-500">User Menu</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="hover:bg-gray-100 cursor-pointer flex items-center" onClick={() => logoutAction()}>
                    <CgLogOut className="w-5 h-5 mr-2" />
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
