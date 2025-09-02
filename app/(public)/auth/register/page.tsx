
import RegisterForm from "@/src/components/forms/RegisterForm";

export default function RegisterPage() {


    return (
        <div className="min-h-screen flex items-center justify-center p-2">
            <div className="w-full max-w-sm">
                <h1 className="text-2xl font-bold text-center mb-6">Crear cuenta</h1>

                <RegisterForm />
            </div>
        </div>
    );
}
