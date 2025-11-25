import IndependentBodiesSection from "../sections/independent-bodies-section";
import HeroBanner from "../ui/hero-banner";

function IndependentBodiesPage() {
  return (
    <main className="flex flex-col min-h-screen relative">
      <HeroBanner
        imageSrc="/images/hero-images/OSP-INDEPENDENT-Hero.png"
        imageAlt="Independent Bodies Page Hero"
        header2="INDEPENDENT BODIES"
      />
        <div className="flex flex-col justify-center items-center">
          <IndependentBodiesSection />
        </div>
      
    </main>
  );
}

export default IndependentBodiesPage;
