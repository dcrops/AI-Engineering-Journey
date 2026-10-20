import { ArrowRight } from "lucide-react"
import { featuredProjects } from "../data/featuredProjects"
import { trackJourneyEvent } from "../utils/visitorTracking"

export default function FeaturedWorkSection() {
  return (
    <section id="featured" className="scroll-mt-8 border-t border-white/10 py-16">
      <div>
        <div className="text-[10px] font-black uppercase tracking-[0.45em] text-cyan-300">
          Featured Engineering Work
        </div>
        <h2 className="mt-4 max-w-3xl text-3xl font-black leading-tight text-white md:text-4xl">
          Current evidence for AI engineering roles
        </h2>
        <p className="mt-4 max-w-3xl text-[17px] leading-8 text-zinc-400">
          These projects show the systems I build now. The engineering journey
          further down keeps the full chronology and technical detail.
        </p>
      </div>

      <div className="mt-12 grid max-w-5xl gap-4">
        {featuredProjects.map((project) => (
          <article
            key={project.id}
            className="rounded-2xl border border-white/10 bg-black/40 p-5 backdrop-blur-sm sm:p-6"
          >
            <div className="flex items-start gap-3">
              <div className="text-xl font-black tabular-nums text-violet-400">
                {project.number}
              </div>
              <h3 className="text-2xl font-black leading-snug text-white">
                {project.title}
              </h3>
            </div>

            <dl className="mt-6 grid gap-5 lg:grid-cols-3">
              <FeaturedFact label="Business problem" text={project.problem} />
              <FeaturedFact label="What the system does" text={project.outcome} />
              <FeaturedFact label="Governance" text={project.governance} />
            </dl>

            <ul className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-semibold text-zinc-300"
                >
                  {item}
                </li>
              ))}
            </ul>

            {project.detailHref && (
              <a
                href={project.detailHref}
                onClick={() =>
                  trackJourneyEvent("featured_project_opened", {
                    label: project.title,
                    project_name: project.title,
                  })
                }
                className="group mt-6 inline-flex max-w-full items-center gap-2 rounded-xl border border-cyan-300 bg-cyan-400 px-4 py-3 text-[11px] font-black uppercase tracking-[0.12em] text-zinc-950 shadow-[0_0_24px_rgba(34,211,238,0.22)] transition-all duration-200 hover:bg-cyan-300 hover:shadow-[0_0_32px_rgba(34,211,238,0.38)] active:translate-y-px active:bg-cyan-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:px-5 sm:tracking-[0.16em]"
              >
                {project.detailLabel}
                <ArrowRight
                  className="h-3.5 w-3.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

function FeaturedFact({ label, text }) {
  return (
    <div>
      <dt className="text-[10px] font-black uppercase tracking-[0.28em] text-cyan-300">
        {label}
      </dt>
      <dd className="mt-2 text-[15px] leading-7 text-zinc-300">{text}</dd>
    </div>
  )
}
