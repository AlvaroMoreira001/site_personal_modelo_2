import HeroSection from "@/components/HeroSection";
import TransformationsSection from "@/components/TransformationsSection";
import TrainerSection from "@/components/TrainerSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FinalCTASection from "@/components/FinalCTASection";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <HeroSection />
      <TransformationsSection />
      <TrainerSection />
      <ServicesSection />
      <TestimonialsSection />
      <FinalCTASection />
      <WhatsAppFloat />
    </main>
  );
};

export default Index;
