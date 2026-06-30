import HeroSection from "./sections/HeroSection"
import PhaseSection from "./sections/PhaseSection"
import FutureProjectsSection from "./sections/FutureProjectsSection"
import { phases } from "./data/phases"
import { useEffect } from "react";
import { initVisitorTracking } from "./utils/visitorTracking";

export default function App() {

  useEffect(() => {
    const cleanup = initVisitorTracking();

    return cleanup;
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />

      <section className="relative mx-auto max-w-[1600px] px-8 pb-24 md:px-16">
        {/* Journey route overlay — sits behind all phase content */}

        <div className="relative z-10 space-y-16">
          {phases.map((phase) => (
            <PhaseSection key={phase.id} phase={phase} />
          ))}

          <FutureProjectsSection />
        </div>
      </section>
    </main>
  )
}