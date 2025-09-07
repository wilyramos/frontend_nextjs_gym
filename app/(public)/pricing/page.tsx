// PricingPage.tsx

import ListPricing from "@/src/components/home/ListPricing";



export default function PricingPage() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-20 text-center">

            <h1 className="text-3xl font-bold text-center mb-8 text-gray-900">
                Nuestros Planes
            </h1>
            <span>
                Elige el plan que mejor se adapte a tus necesidades y comienza tu viaje hacia una vida más saludable con GoGYM.
            </span>
            <ListPricing />
        </section>
    );
}