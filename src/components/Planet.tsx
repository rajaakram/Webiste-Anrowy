import { useEffect, useRef } from 'react'

const Planet = () => {
  const planetRef = useRef<HTMLDivElement>(null)
  const atmosphereRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const planet = planetRef.current
    const atmosphere = atmosphereRef.current
    if (!planet || !atmosphere) return

    // Add subtle mouse parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      
      const xPercent = (clientX / innerWidth - 0.5) * 2
      const yPercent = (clientY / innerHeight - 0.5) * 2
      
      // Subtle rotation based on mouse position
      planet.style.transform = `
        translateX(${xPercent * 10}px) 
        translateY(${yPercent * 10}px)
        rotateY(${xPercent * 15}deg)
        rotateX(${-yPercent * 15}deg)
      `
      
      // Atmosphere moves slightly less for depth
      atmosphere.style.transform = `
        translateX(${xPercent * 5}px) 
        translateY(${yPercent * 5}px)
      `
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative w-32 h-32 md:w-40 md:h-40">
      {/* Outer glow atmosphere */}
      <div
        ref={atmosphereRef}
        className="absolute inset-0 rounded-full transition-transform duration-300 ease-out"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(34, 211, 238, 0.2) 40%, transparent 70%)',
          filter: 'blur(20px)',
          transform: 'scale(1.5)',
        }}
      />
      
      {/* Main planet body */}
      <div
        ref={planetRef}
        className="relative w-full h-full rounded-full transition-transform duration-300 ease-out"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, 
              rgba(168, 85, 247, 0.9) 0%, 
              rgba(107, 76, 154, 0.8) 20%, 
              rgba(76, 107, 154, 0.7) 40%, 
              rgba(34, 211, 238, 0.5) 60%, 
              rgba(26, 26, 62, 0.9) 80%, 
              #0a0a1a 100%
            )
          `,
          boxShadow: `
            inset -30px -30px 60px rgba(0, 0, 0, 0.9),
            inset 20px 20px 40px rgba(168, 85, 247, 0.3),
            0 0 60px rgba(139, 92, 246, 0.5),
            0 0 100px rgba(34, 211, 238, 0.3),
            0 0 150px rgba(168, 85, 247, 0.2)
          `,
        }}
      >
        {/* Planet surface details - continents/landmasses effect */}
        <div 
          className="absolute inset-0 rounded-full opacity-40"
          style={{
            background: `
              radial-gradient(ellipse at 30% 40%, rgba(168, 85, 247, 0.6) 0%, transparent 30%),
              radial-gradient(ellipse at 70% 60%, rgba(34, 211, 238, 0.4) 0%, transparent 25%),
              radial-gradient(ellipse at 50% 80%, rgba(107, 76, 154, 0.5) 0%, transparent 35%),
              radial-gradient(ellipse at 20% 70%, rgba(76, 107, 154, 0.4) 0%, transparent 20%)
            `,
          }}
        />
        
        {/* Highlight reflection */}
        <div 
          className="absolute top-4 left-6 w-12 h-8 rounded-full opacity-30"
          style={{
            background: 'radial-gradient(ellipse, rgba(255, 255, 255, 0.8) 0%, transparent 70%)',
            filter: 'blur(2px)',
          }}
        />
      </div>
      
      {/* Ring system (Saturn-like, but subtle) */}
      <div 
        className="absolute inset-0 rounded-full animate-spin-slow"
        style={{
          transform: 'rotateX(75deg) rotateZ(30deg)',
          border: '2px solid rgba(168, 85, 247, 0.2)',
          boxShadow: `
            0 0 0 8px rgba(139, 92, 246, 0.1),
            0 0 0 16px rgba(34, 211, 238, 0.05)
          `,
        }}
      />
      
      {/* Inner bright ring */}
      <div 
        className="absolute inset-[-10px] rounded-full animate-spin-slow"
        style={{
          transform: 'rotateX(75deg) rotateZ(30deg)',
          background: `
            conic-gradient(from 0deg, 
              transparent 0deg, 
              rgba(168, 85, 247, 0.3) 60deg, 
              transparent 120deg,
              rgba(34, 211, 238, 0.2) 180deg,
              transparent 240deg,
              rgba(168, 85, 247, 0.3) 300deg,
              transparent 360deg
            )
          `,
          filter: 'blur(1px)',
        }}
      />
    </div>
  )
}

export default Planet
