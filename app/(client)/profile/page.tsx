import { getCurrentUser } from "@/src/auth/currentUser";
import EditProfileDialog from "@/src/components/client/overview/EditProfileDialog";
import Spinner from "@/src/components/common/Spinner";
import Link from "next/link";
import { FaUser, FaEnvelope, FaPhone, FaIdCard } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";


export default async function ProfilePage() {
    const user = await getCurrentUser();

    if (!user) {
        return <Spinner />;
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">

                <div>
                    <h1 className="text-3xl font-bold">Profile</h1>
                    <p className="text-muted-foreground">Manage your personal information</p>
                </div>
                <EditProfileDialog user={user} />
            </div>

            <div className="rounded-xl shadow p-6 mb-8 border space-y-4">
                {/* Nombre */}
                <div className="flex items-center gap-3">
                    <FaUser className="" />
                    <div>
                        <p className="text-sm text-muted-foreground">Name</p>
                        <p className="text-base ">{user.name}</p>
                    </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                    <FaEnvelope className="" />
                    <div>
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="text-base ">{user.email}</p>
                    </div>
                </div>

                {/* Teléfono */}
                <div className="flex items-center gap-3">
                    <FaPhone className="" />
                    <div>
                        <p className="text-sm text-muted-foreground">Phone</p>
                        <p className="text-base ">{user.phone}</p>
                    </div>
                </div>

                {/* Documento */}
                <div className="flex items-center gap-3">
                    <FaIdCard className="" />
                    <div>
                        <p className="text-sm text-muted-foreground">DNI</p>
                        <p className="text-base ">{user.document}</p>
                    </div>
                </div>
            </div>

            <Link
                className="flex items-center justify-between p-4 hover:bg-accent transition border rounded-xl shadow"
                href={"/password"}
            >
                <RiLockPasswordLine />
                Contraseña
            </Link>
        </div>
    );
}
