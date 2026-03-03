import Treatments from '@/components/Treatments';
import WhyChooseUs from '@/components/WhyChooseUs';
import  Gallery from '@/components/Gallery';
import { Testimonials } from '@/components/Testimonials';
import Journey  from '@/components/Journey';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { Location } from '@/components/Location';
import { FinalCTA } from '@/components/FinalCTA';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';
import { MobileBottomBar } from '@/components/MobileBottomBar';
import Hero from '@/components/Hero';
import Header from '@/components/Header';
import Dentist from '@/components/Dentist';

export default function Home() {
  return (
    <main className="min-h-screen relative pb-16 md:pb-0">
      <Header />
      <Hero />
      <Treatments />
      <WhyChooseUs />
      <Dentist />
      <Gallery />
      <Testimonials />
      <Journey />
      <Pricing />
      <FAQ />
      <Location />
      <FinalCTA />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </main>
  );
}
