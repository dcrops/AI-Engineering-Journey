export default function PersistentJourneyPath() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.08]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.35) 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      <PhaseFrame
        top="20px"
        height="330px"
        color="rgba(139,92,246,0.85)"
        left="42%"
      />

      <PhaseFrame
        top="520px"
        height="350px"
        color="rgba(34,211,238,0.85)"
        left="14%"
      />

      <PhaseFrame
        top="890px"
        height="330px"
        color="rgba(34,197,94,0.85)"
        left="14%"
      />
    </div>
  )
}

function PhaseFrame({ top, height, color, left = "14%" }) {
  return (
    <div
      className="absolute"
      style={{
        top,
        left,
        right: "4%",
        height,
      }}
    >
      {/* TOP */}
      <div
        className="absolute left-0 top-0 h-[3px] w-full rounded-full"
        style={{
          background: color,
          boxShadow: `0 0 10px ${color}`,
        }}
      />

      {/* RIGHT */}
      <div
        className="absolute right-0 top-0 h-full w-[3px]"
        style={{
          background: color,
          boxShadow: `0 0 10px ${color}`,
        }}
      />

      {/* BOTTOM */}
      <div
        className="absolute bottom-0 left-0 h-[3px] w-full rounded-full"
        style={{
          background: color,
          boxShadow: `0 0 10px ${color}`,
        }}
      />
    </div>
  )
}

