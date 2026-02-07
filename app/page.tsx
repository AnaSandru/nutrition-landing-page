import Hero from "./components/Hero";
import CTA from "./components/CTA";
import Testimonials from "./components/Testimonials";
import Benefits from "./components/Benefits";
import Services from "./components/Services";
export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Benefits />
      <Services />
      <Testimonials />
      <CTA />
    </main>
  );
}
