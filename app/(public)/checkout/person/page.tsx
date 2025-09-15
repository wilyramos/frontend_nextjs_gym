import { getCurrentUser } from "@/src/auth/currentUser";
import IdentificationForm from "@/src/components/forms/IdentificationForm";
import { redirect } from "next/navigation";


export default async function PersonPage() {
    

    const currentUser = await getCurrentUser();
    if(!currentUser) {
        redirect("/auth/register?redirectTo=/checkout/choose");
    }

    return (
        <div className="max-w-lg mx-auto px-6 rounded-xl p-2 ">
            <h1 className="text-xl font-semibold text-center mb-8 text-gray-900">
                Información Personal
            </h1>

            <IdentificationForm user={currentUser} />
        </div>
    );
}
