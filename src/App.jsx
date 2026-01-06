import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesGrid from "./components/FeaturesGrid";
import WaitlistSection from "./components/WaitlistSection";
import WhySection from "./components/WhySection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navbar />
      <HeroSection />
      <FeaturesGrid />
      <WaitlistSection />
      <WhySection />
      <Footer />
    </div>
  );
}

