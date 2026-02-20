interface OrbitRingProps {
  size: number
  duration: number
  reverse?: boolean
}

const OrbitRing = ({ size, duration, reverse = false }: OrbitRingProps) => {
  return (
    <div
      className="absolute rounded-full border border-white/10 orbit-glow"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        animation: reverse 
          ? `spin ${duration}s linear infinite reverse`
          : `spin ${duration}s linear infinite`,
      }}
    >
      {/* Gradient accent on ring */}
      <div 
        className="absolute inset-0 rounded-full"
        style={{
          background: `
            conic-gradient(from 0deg, 
              transparent 0deg, 
              rgba(168, 85, 247, 0.4) 45deg, 
              transparent 90deg,
              transparent 180deg,
              rgba(34, 211, 238, 0.3) 225deg,
              transparent 270deg,
              transparent 360deg
            )
          `,
          mask: 'radial-gradient(transparent 49%, black 50%)',
          WebkitMask: 'radial-gradient(transparent 49%, black 50%)',
        }}
      />
      
      {/* Orbital nodes/waypoints */}
      <div 
        className="absolute w-2 h-2 rounded-full bg-nebula-purple/60 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
        style={{ top: '-4px', left: '50%', transform: 'translateX(-50%)' }}
      />
      <div 
        className="absolute w-1.5 h-1.5 rounded-full bg-nebula-cyan/50 shadow-[0_0_8px_rgba(34,211,238,0.4)]"
        style={{ bottom: '-3px', left: '50%', transform: 'translateX(-50%)' }}
      />
    </div>
  )
}

export default OrbitRing
