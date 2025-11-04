import NavigationTab from "@/widgets/NavigationTab";
import SearchBar from "@/widgets/SearchBar";
import TopBar from "@/widgets/TopBar";

export default function Home() {
    return (
        <>
            <header className="container lg:max-w-4xl xl:max-w-5xl 2xl:max-w-7xl mx-auto py-6 px-3">
                <TopBar />
                <SearchBar />
            </header>

            <hr className="my-3 text-gray-200" />

            <main className="container mx-auto px-3">
                <NavigationTab />
            </main>

            <footer className="container max-w-7xl mx-auto px-3">
                
            </footer>
        </>
    );
}
