import AdvocasixSection from "../sections/advocasix-section";
import SDGSection from "../sections/sdg-section";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center">
      <AdvocasixSection />
      <SDGSection />
    </main>
  );
}
