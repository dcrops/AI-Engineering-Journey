import { futureProjects } from "../data/futureProjects"

export default function FutureProjectsSection() {
  return (
    <>
      <div className="py-20">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />

        <div className="mt-10 text-center">
          <div className="text-[10px] font-black uppercase tracking-[0.45em] text-cyan-300">
            Future Projects
          </div>

          <h2 className="mt-4 text-4xl font-black text-white">What&apos;s Next</h2>
        </div>
      </div>

      {futureProjects.map((project) => (
        <FutureProjectCard key={project.id} project={project} />
      ))}
    </>
  )
}

function FutureProjectCard({ project }) {
  return (
    <section className="relative grid min-h-[250px] gap-8 overflow-visible border-t border-white/10 py-10 lg:grid-cols-[120px_320px_1fr]">
      <div className="relative z-20 text-6xl font-black text-violet-500 md:text-7xl">
        {project.id}
      </div>

      <div className="relative z-20">
        <div className="text-[11px] uppercase tracking-[0.28em] text-cyan-300">
          {project.label}
        </div>

        <h2 className="mt-2 max-w-xs text-3xl font-black leading-tight">{project.title}</h2>

        <p className="mt-4 text-sm leading-7 text-zinc-400">{project.shortDescription}</p>
      </div>

      <div className="relative z-20">
        <div className="max-w-5xl space-y-6 text-[19px] leading-9 text-zinc-300">
          {project.intro && <p>{project.intro}</p>}
          {project.description.split("\n\n").map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {project.capabilities.map((capability, index) => (
            <div key={capability} className="flex items-center gap-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3.5 text-xs font-bold uppercase tracking-[0.28em] text-zinc-300">
                {capability}
              </div>

              {index !== project.capabilities.length - 1 && (
                <div className="h-px w-6 bg-cyan-400/60" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <div className="text-[10px] font-black uppercase tracking-[0.35em] text-cyan-300">
            Tech Stack
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((item) => (
              <span
                key={item}
                className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
