import { fetchData } from "@/utils/api";
import Accommodations from "@/widgets/Accomodations";
import Footer from "@/widgets/Footer";
import NavigationTab from "@/widgets/NavigationTab";
import SearchBar from "@/widgets/SearchBar";
import TopBar from "@/widgets/TopBar";

export default async function Home() {
    const data = await fetchData();
    console.log(data)
    console.log(data.accommodation)

    return (
        <>
            <header className="container lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl mx-auto py-6 px-3">
                <TopBar />
                <SearchBar />
            </header>

            <hr className="mb-4 text-gray-200" />

            <main className="container mx-auto px-10">
                <NavigationTab icons={data.icons} />
                <Accommodations accommodation={data.accommodation} />
            </main>

            <footer className="container bg-gray-200">
                <Footer />
            </footer>
        </>
    );
}
