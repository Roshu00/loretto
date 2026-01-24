import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MenuPreview } from "@/components/MenuPreview";
import { DetailedMenu } from "@/components/DetailedMenu";
import { Gallery } from "@/components/Gallery";
import { Events } from "@/components/Events";
import { LocationHours } from "@/components/LocationHours";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <MenuPreview />
      <DetailedMenu />
      <Gallery />
      <Events />
      {/* <Testimonials /> */}
      <LocationHours />
      <Footer />
    </main>
  );
}
