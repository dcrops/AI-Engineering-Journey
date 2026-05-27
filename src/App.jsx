import HeroSection from "./sections/HeroSection"
import PhaseSection from "./sections/PhaseSection"
import { phases } from "./data/phases"

export default function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      <HeroSection />

      <section className="relative mx-auto max-w-[1600px] px-8 pb-24 md:px-16">

        <div className="relative z-10 space-y-12">
          {phases.map((phase) => (
            <PhaseSection key={phase.id} phase={phase} />
          ))}
        </div>
      </section>
    </main>
  )
}