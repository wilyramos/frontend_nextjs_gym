import GymBenefitsCarousel from "@/src/components/home/GymBenefitsCarousel";
import GymHome from "@/src/components/home/GymHome";
import ListPricing from "@/src/components/home/ListPricing";
import Footer from "@/src/components/layout/footer";

export default function Home() {
    return (
        <main className="max-w-7xl mx-auto">
            {/* Hero */}

            <section>
                <GymHome />
            </section>

            <section>

                <div className=" flex items-center justify-center rounded-2xl overflow-hidden">
                {/* Contenido: ListPricing */}
                <div className=" w-full max-w-5xl mx-auto">
                    <ListPricing />
                </div>
            </div>
            </section>
            <section>
                <GymBenefitsCarousel />
            </section>
            <section>
                <Footer />
            </section>
        </main>
    );
}