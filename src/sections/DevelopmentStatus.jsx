const groups = [
  ["implemented", "Implemented and exercised", "border-emerald-400/30 text-emerald-200"],
  ["simulated", "Simulated", "border-amber-400/30 text-amber-200"],
  ["outstanding", "Outstanding", "border-white/15 text-zinc-300"],
]

export default function DevelopmentStatus({ status }) {
  return (
    <div className="mt-8">
      <div className="text-[10px] font-black uppercase tracking-[0.35em] text-cyan-300">
        Development status
      </div>
      <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-400">
        This section describes the path that has been built and exercised. It
        is not a finished or commercially deployed platform.
      </p>
      <div className="mt-4 grid gap-3 lg:grid-cols-3">
        {groups.map(([key, label, tone]) => (
          <section key={key} className="rounded-2xl border border-white/10 bg-black/40 p-4">
            <h3 className={`text-[10px] font-black uppercase tracking-[0.18em] ${tone}`}>
              {label}
            </h3>
            <ul className="mt-3 grid gap-2">
              {status[key].map((item) => (
                <li key={item} className="text-[13px] leading-5 text-zinc-300">
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}
