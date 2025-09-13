import { getCurrentUser } from "@/src/auth/currentUser";
import { FaUser, FaEnvelope, FaPhone, FaIdCard } from "react-icons/fa";

export default async function ProfilePage() {
    const user = await getCurrentUser();

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1 className="mb-2 text-3xl font-bold text-black">Perfil</h1>
            <p className="mb-6 text-gray-500">Detalles de tu cuenta</p>

            <div className="bg-white rounded-xl shadow p-6 mb-8 border border-gray-200 space-y-4">
                {/* Nombre */}
                <div className="flex items-center gap-3">
                    <FaUser className="text-gray-600 text-lg" />
                    <div>
                        <p className="text-sm text-gray-500">Name</p>
                        <p className="text-base font-medium">{user.name}</p>
                    </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                    <FaEnvelope className="text-gray-600 text-lg" />
                    <div>
                        <p className="text-sm text-gray-500">Email</p>
                        <p className="text-base font-medium">{user.email}</p>
                    </div>
                </div>

                {/* Teléfono */}
                <div className="flex items-center gap-3">
                    <FaPhone className="text-gray-600 text-lg" />
                    <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        <p className="text-base font-medium">{user.phone}</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <FaIdCard className="text-gray-600 text-lg" />

                    <div>
                        <p className="text-sm text-gray-500">DNI</p>
                        <p className="text-base font-medium">{user.document}</p>
                    </div>
                </div>

            </div>
        </div>
    );
}