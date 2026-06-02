import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import RanksSection from "@/components/home/RanksSection";
import HeroRosterSection from "@/components/home/HeroRosterSection";
import ContributeBanner from "@/components/home/ContributeBanner";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <HeroSection />
      <FeaturesSection />
      <RanksSection />
      <HeroRosterSection />
      <ContributeBanner />
      <Footer />
    </main>
  );
}
