import HeroSection from '../components/HeroSection';
import StatsBar from '../components/StatsBar';
import WhyTerraBloom from '../components/WhyTerraBloom';
import ProductOfferings from '../components/ProductOfferings';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <WhyTerraBloom />
      <ProductOfferings />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
