import CheckoutSteps from '@/src/components/common/CheckoutSteps';


export default async function CheckoutLayout({ children }: { children: React.ReactNode }) {


    return (
        <main className="max-w-6xl mx-auto ">

            {/* Pasos del checkout */}
            <div className="pt-20">
                <CheckoutSteps />
            </div>

            {/* Grid: paso actual + resumen */}
            <div className="">

                {/* Paso actual (shipping, payment, etc.) */}
                <section className="md:col-span-2 px-4">
                    {children}
                </section>

               

            </div>
        </main>
    );
}