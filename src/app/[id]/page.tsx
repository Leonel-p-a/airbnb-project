import { fetchDataById } from "@/utils/api";
import AccommodationDetails from "@/widgets/AccommodationDetails";
import AccommodationTestimonials from "@/widgets/AccommodationTestimonials";
import Footer from "@/widgets/Footer";
import Gallery from "@/widgets/Gallery";
import SearchBar from "@/widgets/SearchBar";
import TopBar from "@/widgets/TopBar";
import { notFound } from "next/navigation";

interface PageProps {
    id: string
}

export default async function Page({ params }: { params: Promise<PageProps> }) {
    const { id } = await params;
    const accommodation = await fetchDataById(id);

    if (!accommodation) {
        notFound();
    }

    return (
        <div>
            <header className="container lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl mx-auto py-6 px-3">
                <TopBar />
                <SearchBar />
            </header>

            <main className="container mx-auto px-10 py-6">
                <h1 className="text-2xl font-semibold pb-3">{accommodation.title}</h1>
                <Gallery photos={accommodation.photos} />

                <div className="flex flex-col md:flex-row">
                    <AccommodationDetails accommodation={accommodation} />
                    <AccommodationTestimonials testimonials={accommodation.testimonials} />
                </div>
            </main>

            <footer className="container w-full mx-auto bg-gray-200">
                <Footer />
            </footer>
        </div>
    )
}