import MemberDetails from "@/src/components/client/MemberDetails";
import { CreditCard, Users, Settings } from "lucide-react";
import Link from "next/link";
import { getMembershipData } from "@/src/services/memberships";

export default async function OverviewPage() {
    const memberships = await getMembershipData();

    const quickLinks = [
        { name: "Change plan", icon: <Users className="w-5 h-5" />, href: "/dashboard/change-plan", disabled: true },
        { name: "Manage payment method", icon: <CreditCard className="w-5 h-5" />, href: "/dashboard/payments", disabled: false },
        { name: "Settings", icon: <Settings className="w-5 h-5" />, href: "/dashboard/settings", disabled: true },
    ];

    return (
        <div>
            <h1 className="text-3xl font-bold mb-2">Account</h1>
            <p className="text-muted-foreground mb-6">Membership Details</p>

            <MemberDetails memberships={memberships} />

            {/* Quick Links */}
            <h3 className="text-lg font-semibold mb-2 pt-5">Enlaces Rápidos</h3>
            <div className="rounded-xl shadow divide-y border">
                {quickLinks.map((link) =>
                    link.disabled ? (
                        <button
                            key={link.name}
                            disabled
                            className="flex items-center justify-between p-4 w-full text-left opacity-50 cursor-not-allowed"
                        >
                            <div className="flex items-center space-x-3">
                                <span>{link.icon}</span>
                                <span className="font-medium">{link.name}</span>
                            </div>
                        </button>
                    ) : (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="flex items-center justify-between p-4 hover:bg-accent transition"
                        >
                            <div className="flex items-center space-x-3">
                                <span>{link.icon}</span>
                                <span className="font-medium">{link.name}</span>
                            </div>
                        </Link>
                    )
                )}
            </div>
        </div>
    );
}