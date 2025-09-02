import LoginForm from "@/src/components/forms/LoginForm";

export default function LoginPage() {


    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-full max-w-sm">
                <h1 className="text-2xl font-bold text-center mb-6">Iniciar Sesion</h1>

                <LoginForm />
            </div>
        </div>
    );
}
