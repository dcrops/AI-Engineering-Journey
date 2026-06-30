import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaFileAlt,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa"

export default function HeroSection() {
  return (
    <section className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col justify-between px-8 py-8 md:px-16">
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="/crc_logo.png"
            alt="CRC Logo"
            className="h-14 w-auto"
          />

          <div>
            <div className="text-2xl font-black text-white">CRC</div>

            <div className="text-[11px] uppercase tracking-[0.45em] text-zinc-400">
              Chase Risk & Compliance
            </div>
          </div>
        </div>

        <div className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">
          Engineering Journey
        </div>
      </header>

      <div className="grid gap-12 lg:grid-cols-[1.2fr_.8fr] lg:items-start">
        <div>
          <div className="mb-6 text-[11px] font-black uppercase tracking-[0.45em] text-violet-300">
            AN AI ENGINEERING JOURNEY
          </div>

          <h1 className="max-w-5xl text-6xl font-black uppercase leading-[0.88] tracking-tight md:text-8xl xl:text-[9rem]">
            FROM
            <br />
            OPERATIONAL
            <br />
            DIAGNOSTICS
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-500 to-cyan-300 bg-clip-text text-transparent">
              TO
              <br />
              GOVERNANCE-AWARE
              <br />
              OPERATIONAL
              <br />
              AI SYSTEMS.
            </span>
          </h1>
        </div>

        <div className="mt-10 w-full max-w-md justify-self-end rounded-3xl border border-cyan-400/20 bg-black/60 p-7 shadow-[0_0_80px_rgba(0,255,255,0.06)] backdrop-blur-sm">
          <div className="text-[10px] uppercase tracking-[0.35em] text-cyan-300">
            Connect
          </div>

          <div className="mt-5 text-4xl font-black leading-none text-white">
            Dave Cropper
          </div>

          <div className="mt-4 text-sm uppercase tracking-[0.18em] text-zinc-500">
            AI Engineer
          </div>

          <div className="mt-3 flex items-center gap-3 text-sm text-zinc-400">
            <FaMapMarkerAlt className="text-cyan-400" />
            <span>Melbourne, Australia</span>
          </div>

          <div className="mt-6 space-y-3 text-sm text-zinc-400">
            <a
              href="mailto:dave_cropper2003@yahoo.co.uk"
              data-track
              data-track-label="Email contact clicked"
              className="flex items-center gap-3 transition-colors hover:text-cyan-300"
            >
              <FaEnvelope className="text-cyan-400" />
              <span>dave_cropper2003@yahoo.co.uk</span>
            </a>

            <a
              href="tel:0400811545"
              data-track
              data-track-label="Phone contact clicked"
              className="flex items-center gap-3 transition-colors hover:text-cyan-300"
            >
              <FaPhone className="text-cyan-400" />
              <span>0400 811 545</span>
            </a>
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <div className="space-y-5 text-sm text-zinc-300">
              <div className="flex items-center gap-4">
                <div className="h-2.5 w-2.5 rounded-full bg-violet-400 shadow-[0_0_12px_rgba(168,85,247,0.9)]" />
                <span>Governance-Aware AI Systems</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-2.5 w-2.5 rounded-full bg-fuchsia-400 shadow-[0_0_12px_rgba(232,121,249,0.9)]" />
                <span>Operational Intelligence</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-2.5 w-2.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.9)]" />
                <span>Retrieval & Orchestration</span>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
                <span>Explainable AI Workflows</span>
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-3">
            <a
              href="/David-Cropper-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-track
              data-track-label="Resume clicked"
              className="flex items-center justify-center gap-3 rounded-xl border border-violet-400/30 bg-violet-500/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-violet-200 transition-all duration-200 hover:border-violet-300 hover:bg-violet-500/20"
            >
              <FaFileAlt size={16} />
              Resume
            </a>

            <a
              href="https://www.linkedin.com/in/david-cropper/"
              target="_blank"
              rel="noopener noreferrer"
              data-track
              data-track-label="LinkedIn clicked"
              className="flex items-center justify-center gap-3 rounded-xl border border-blue-400/30 bg-blue-500/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-blue-200 transition-all duration-200 hover:border-blue-300 hover:bg-blue-500/20"
            >
              <FaLinkedin size={16} />
              LinkedIn
            </a>

            <a
              href="https://github.com/dcrops"
              target="_blank"
              rel="noopener noreferrer"
              data-track
              data-track-label="GitHub clicked"
              className="flex items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-300 transition-all duration-200 hover:border-white/30"
            >
              <FaGithub size={16} />
              GitHub
            </a>

            <a
              href="https://www.chaseriskandcompliance.com.au"
              target="_blank"
              rel="noopener noreferrer"
              data-track
              data-track-label="CRC website clicked"
              className="flex items-center justify-center gap-3 rounded-xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-cyan-200 transition-all duration-200 hover:border-cyan-300 hover:bg-cyan-500/20"
            >
              <FaGlobe size={16} />
              CRC
            </a>
          </div>

          <div className="mt-8 rounded-2xl border border-green-400/20 bg-green-500/5 p-5">
            <div className="text-[10px] uppercase tracking-[0.28em] text-zinc-500">
              Status
            </div>

            <div className="mt-3 flex items-center gap-3 text-sm text-zinc-200">
              <div className="h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_14px_rgba(74,222,128,1)]" />
              <span>Open to AI Engineering opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}