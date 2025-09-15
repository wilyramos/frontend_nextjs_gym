import CheckoutSteps from '@/src/components/common/CheckoutSteps';


export default async function CheckoutLayout({ children }: { children: React.ReactNode }) {


    return (
        <main className="max-w-6xl mx-auto ">

            {/* Pasos del checkout */}
            <div className="p-4 md:pt-20">
                <CheckoutSteps />
            </div>

            {/* Grid: paso actual + resumen */}

            {/* Paso actual (shipping, payment, etc.) */}
            <section className="px-4 ">
                {children}
            </section>
        </main>
    );
}