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
            {/* Precios */}
            <section className="flex flex-col justify-center items-center text-center px-4 py-5">
                <h2 className="text-4xl font-bold text-center text-black ">
                    Membresias
                </h2>
                <ListPricing />
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