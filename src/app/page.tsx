import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GridBackground from "@/components/GridBackground";
import TechMarquee from "@/components/TechMarquee";
import About from "@/components/About";
import Work from "@/components/Work";
import OpenSource from "@/components/OpenSource";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen" style={{ backgroundColor: 'var(--background-base)' }}>
      {/* Decorative Grid Background - z-index 0, behind everything */}
      <GridBackground />

      {/* Navigation - z-index 50 (in Navbar component) */}
      <Navbar />

      {/* Content wrapper - z-index 1, above grid */}
      <div className="relative" style={{ zIndex: 1 }}>
        {/* Hero Section */}
        <Hero />

        {/* Tech Stack Marquee */}
        <div className="mt-4">
          <TechMarquee />
        </div>

        {/* About Section */}
        <About />

        {/* Work Section */}
        <Work />

        {/* Open Source Section */}
        <OpenSource />

        {/* Contact Section */}
        <Contact />
      </div>
    </main>
  );
}
