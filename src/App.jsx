import HeroSection from "./sections/HeroSection"
import FeaturedWorkSection from "./sections/FeaturedWorkSection"
import ProjectDemonstrationsSection from "./sections/ProjectDemonstrationsSection"
import PhaseSection from "./sections/PhaseSection"
import CicProjectSection from "./sections/CicProjectSection"
import BackToTop from "./components/BackToTop"
import { phases } from "./data/phases"
import { useEffect } from "react"
import { initVisitorTracking } from "./utils/visitorTracking"

export default function App() {
  useEffect(() => {
    const cleanup = initVisitorTracking()

    return cleanup
  }, [])

  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />

      <section className="relative mx-auto max-w-[1600px] px-8 pb-24 md:px-16">
        {/* Journey route overlay — sits behind all phase content */}

        <div className="relative z-10 space-y-16">
          <FeaturedWorkSection />

          <ProjectDemonstrationsSection />

          <section id="journey" className="scroll-mt-8 border-t border-white/10 pt-16">
            <div className="text-[11px] font-black uppercase tracking-[0.45em] text-violet-300">
              My AI Engineering Journey
            </div>
            <h2 className="mt-4 max-w-5xl text-4xl font-black uppercase leading-[0.9] tracking-tight md:text-6xl">
              From
              <br />
              operational
              <br />
              diagnostics
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-300 bg-clip-text text-transparent">
                to
                <br />
                governance-aware
                <br />
                operational
                <br />
                AI systems.
              </span>
            </h2>
          </section>

          {phases
            .filter((phase) => Number(phase.id) < 6)
            .map((phase) => (
              <PhaseSection key={phase.id} phase={phase} />
            ))}

          <CicProjectSection />

          {phases
            .filter((phase) => Number(phase.id) > 6)
            .map((phase) => (
              <PhaseSection key={phase.id} phase={phase} />
            ))}
        </div>
      </section>

      <BackToTop />
    </main>
  )
}