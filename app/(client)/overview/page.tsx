

import MemberDetails from "@/src/components/client/MemberDetails";
import { CreditCard, Users, Plus, Settings } from "lucide-react";
import Link from "next/link";
import { getMembershipData } from "@/src/services/memberships";


export default async function OverviewPage() {
    const memberships = await getMembershipData();
        


    const quickLinks = [
        { name: "Change plan", icon: <Users className="w-5 h-5" />, href: "/dashboard/change-plan" },
        { name: "Manage payment method", icon: <CreditCard className="w-5 h-5" />, href: "/dashboard/payments" },
        { name: "Buy extra class slot", icon: <Plus className="w-5 h-5" />, href: "/dashboard/buy-slot", badge: "New" },
        { name: "Settings", icon: <Settings className="w-5 h-5" />, href: "/dashboard/settings" },
    ];

    return (
        <div className="">
            <h1 className="text-3xl font-bold text-black mb-2">Account</h1>
            <p className="text-gray-500 mb-6">Membership Details</p>

            <MemberDetails 
                memberships={memberships}
            />
            {/* Quick Links */}
            <h3 className="text-black font-semibold mb-2 pt-5">Quick Links</h3>
            <div className="bg-white rounded-xl shadow divide-y divide-gray-200 border border-gray-200">
                {quickLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        className="flex items-center justify-between p-4 hover:bg-gray-50 transition"
                    >
                        <div className="flex items-center gap-3">
                            <span className="text-gray-600">{link.icon}</span>
                            <span className="font-medium text-black">{link.name}</span>
                        </div>
                        {link.badge && (
                            <span className="text-xs bg-amber-300 text-black px-2 py-0.5 rounded-full font-medium">
                                {link.badge}
                            </span>
                        )}
                    </Link>
                ))}
            </div>
        </div>
    );
}