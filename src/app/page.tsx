import TopBar from "@/widgets/TopBar";

export default function Home() {
  return (
    <>
      <div>
        <TopBar />
      </div>
      <hr />
      <div className="border-orange-700 border-3">Área conteúdos</div>
      <div className="border-orange-900 border-3">Área rodapé</div>
    </>
  );
}
