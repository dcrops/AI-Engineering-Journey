import HeroSection from "./sections/HeroSection"
import PhaseSection from "./sections/PhaseSection"
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

        <div className="relative z-10 space-y-12">
          {phases.map((phase) => (
            <div key={phase.id}>
              {phase.id === "05" && (
                <div className="py-20">
                  <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

                  <div className="mt-10 text-center">
                    <div className="text-[10px] font-black uppercase tracking-[0.45em] text-cyan-300">
                      Future Projects
                    </div>

                    <h2 className="mt-4 text-4xl font-black text-white">
                      What Comes Next
                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-zinc-400">
                      The next stage extends the journey from payroll diagnostics and
                      document intelligence into governance-aware operational AI
                      systems focused on structured business data, operational
                      reasoning and explainable decision support.
                    </p>
                  </div>
                </div>
              )}

              <PhaseSection phase={phase} />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}