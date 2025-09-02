
import Logo from "@/src/components/common/Logo";
import FormAuth from "@/src/components/forms/FormAuth";



export default function VerifyEmailPage() {


    return (
        <div className="min-h-screen flex items-center justify-center">

            <div className="w-full max-w-sm">
                <Logo />
                <h1 className="text-2xl mb-6">
                    Ingresa tu correo para continuar
                </h1>

                <FormAuth />
            </div>
        </div>
    );
}