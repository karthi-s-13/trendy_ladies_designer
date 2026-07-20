import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { MannequinShowcase } from "@/components/site/MannequinShowcase";
import {
  About,
  Experience,
  Samples,
  Reviews,
  Contact,
  Footer,
} from "@/components/site/Sections";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <MannequinShowcase />
      <About />
      <Experience />
      <Samples />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}
