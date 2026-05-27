import { motion } from "framer-motion"
import { WalkIcon, BikeIcon, CarIcon, PlaneIcon } from "../components/JourneyIcons"

const journeyStops = [
    {
      id: "01",
      label: "The Beginning",
      mode: "walk",
      Icon: WalkIcon,
      x: "10%",
      y: "62%",
      color: "cyan",
    },
    {
      id: "02",
      label: "Public Holiday App",
      mode: "cycle",
      Icon: BikeIcon,
      x: "36%",
      y: "38%",
      color: "emerald",
    },
    {
      id: "03",
      label: "Payroll Engine",
      mode: "drive",
      Icon: CarIcon,
      x: "64%",
      y: "66%",
      color: "violet",
    },
    {
      id: "04",
      label: "RAG System",
      mode: "fly",
      Icon: PlaneIcon,
      x: "88%",
      y: "34%",
      color: "orange",
    },
  ]

const colorClasses = {
  cyan: {
    text: "text-cyan-300",
    border: "border-cyan-400/30",
    bg: "bg-cyan-500/10",
    glow: "shadow-[0_0_40px_rgba(34,211,238,0.22)]",
  },
  emerald: {
    text: "text-emerald-300",
    border: "border-emerald-400/30",
    bg: "bg-emerald-500/10",
    glow: "shadow-[0_0_40px_rgba(52,211,153,0.22)]",
  },
  violet: {
    text: "text-violet-300",
    border: "border-violet-400/30",
    bg: "bg-violet-500/10",
    glow: "shadow-[0_0_40px_rgba(139,92,246,0.22)]",
  },
  orange: {
    text: "text-orange-300",
    border: "border-orange-400/30",
    bg: "bg-orange-500/10",
    glow: "shadow-[0_0_40px_rgba(251,146,60,0.22)]",
  },
}

function JourneyStop({ stop, index }) {
  const colors = colorClasses[stop.color]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.45, ease: "easeOut" }}
      viewport={{ once: true }}
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: stop.x, top: stop.y }}
    >
      <div className="relative">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className={`flex h-24 w-24 items-center justify-center rounded-full border ${colors.border} ${colors.bg} ${colors.glow}`}
        >
          <div className={colors.text}>
            <stop.Icon />
          </div>
        </motion.div>

        <div className="absolute left-1/2 top-full mt-4 w-44 -translate-x-1/2 text-center">
          <div className={`text-3xl font-black ${colors.text}`}>{stop.id}</div>
          <div className="mt-1 text-[10px] font-black uppercase tracking-[0.22em] text-white">
            {stop.label}
          </div>
          <div className="mt-1 text-[10px] uppercase tracking-[0.22em] text-zinc-500">
            {stop.mode}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function JourneyPath() {
  return (
    <section className="relative mx-auto max-w-[1600px] px-8 py-28 md:px-16">
      <div className="mb-12 max-w-3xl">
        <div className="text-[11px] font-black uppercase tracking-[0.45em] text-cyan-300">
          Project Journey
        </div>

        <h2 className="mt-4 text-5xl font-black uppercase leading-tight text-white md:text-6xl">
          The further the work evolved, the more powerful the systems became.
        </h2>

        <p className="mt-6 text-lg leading-8 text-zinc-400">
          Each project increased the engineering maturity of the journey — from
          solving one operational problem, to building broader diagnostics, to
          designing governance-aware AI systems.
        </p>
      </div>

      <div className="relative h-[520px] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_55%)]" />
        </div>

        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1200 500"
          preserveAspectRatio="none"
        >
          <motion.path
            d="M 60 315 C 230 400, 300 110, 450 190 C 600 275, 655 420, 820 320 C 980 220, 1010 110, 1140 170"
            fill="none"
            stroke="url(#journeyGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          <motion.path
            d="M 60 315 C 230 400, 300 110, 450 190 C 600 275, 655 420, 820 320 C 980 220, 1010 110, 1140 170"
            fill="none"
            stroke="white"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="8 18"
            opacity="0.35"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2.2, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          <defs>
            <linearGradient id="journeyGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="35%" stopColor="#34d399" />
              <stop offset="65%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#fb923c" />
            </linearGradient>
          </defs>
        </svg>

        {journeyStops.map((stop, index) => (
          <JourneyStop key={stop.id} stop={stop} index={index} />
        ))}
      </div>
    </section>
  )
}