import SearchBar from "@/widgets/SearchBar";
import TopBar from "@/widgets/TopBar";

export default function Home() {
  return (
    <>
      <div>
        <TopBar />
        <SearchBar />
      </div>
      <hr className="mt-5 text-gray-200" />
      <div className="border-orange-700 border-3 mt-10">Área conteúdos</div>
      <div className="border-orange-900 border-3">Área rodapé</div>
    </>
  );
}
