import { useEffect, useState } from 'react'

const ComingSoon = () => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="text-center z-10">
      {/* Brand name */}
      <div 
        className={`transition-all duration-1000 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          <span className="text-gradient-cosmic glow-text">Anrowy</span>
        </h1>
      </div>

      {/* Tagline */}
      <div 
        className={`transition-all duration-1000 delay-300 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-xl md:text-2xl text-starlight-dim font-light tracking-widest uppercase mb-8">
          Expanding Horizons
        </p>
      </div>

      {/* Divider */}
      <div 
        className={`flex items-center justify-center gap-4 mb-8 transition-all duration-1000 delay-500 ease-out ${
          visible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
        }`}
      >
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-nebula-purple to-transparent" />
        <div className="w-2 h-2 rounded-full bg-nebula-cyan animate-pulse" />
        <div className="h-px w-16 bg-gradient-to-r from-transparent via-nebula-cyan to-transparent" />
      </div>

      {/* Coming Soon text */}
      <div 
        className={`transition-all duration-1000 delay-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <h2 className="text-3xl md:text-5xl font-semibold text-starlight-white mb-4">
          Coming Soon
        </h2>
      </div>

      {/* Description */}
      <div 
        className={`transition-all duration-1000 delay-900 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <p className="text-starlight-dim max-w-md mx-auto text-base md:text-lg leading-relaxed">
          Something extraordinary is taking shape beyond the horizon. 
          Join us as we push the boundaries of exploration.
        </p>
      </div>

      {/* Decorative dots */}
      <div 
        className={`flex justify-center gap-2 mt-8 transition-all duration-1000 delay-1100 ease-out ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <span className="w-2 h-2 rounded-full bg-nebula-purple animate-pulse" style={{ animationDelay: '0s' }} />
        <span className="w-2 h-2 rounded-full bg-nebula-cyan animate-pulse" style={{ animationDelay: '0.3s' }} />
        <span className="w-2 h-2 rounded-full bg-nebula-pink animate-pulse" style={{ animationDelay: '0.6s' }} />
      </div>
    </div>
  )
}

export default ComingSoon
