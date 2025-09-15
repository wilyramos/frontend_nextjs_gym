
import Logo from "@/src/components/common/Logo";
// import FormAuth from "@/src/components/forms/FormAuth";



export default function VerifyEmailPage() {


    return (
        <div className="min-h-screen flex items-center justify-center p-2 bg-red-700">

            <div className="w-full max-w-sm border-gray-50 p-4 rounded-xl shadow-lg text-center">
                <Logo />
                <h1 className="text-start pt-8 text-gray-600 text-sm">
                    Ingresa tu correo para continuar:
                </h1>

                {/* <FormAuth /> */}
            </div>
        </div>
    );
}