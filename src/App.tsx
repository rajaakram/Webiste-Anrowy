import StarField from './components/StarField'
import Planet from './components/Planet'
import OrbitRing from './components/OrbitRing'
import ComingSoon from './components/ComingSoon'
import GitHubLink from './components/GitHubLink'

function App() {
  return (
    <div className="relative min-h-screen w-full bg-space-900 overflow-hidden">
      {/* Deep space background gradient */}
      <div className="fixed inset-0 bg-space-gradient" />
      
      {/* Starfield background */}
      <StarField />
      
      {/* Cosmic nebula effects */}
      <div className="fixed top-0 left-0 w-[600px] h-[600px] bg-cosmic-glow opacity-40 blur-3xl animate-pulse-glow" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-cosmic-glow opacity-30 blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      {/* Main content container */}
      <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        
        {/* Orbital system container */}
        <div className="relative w-[400px] h-[400px] md:w-[500px] md:h-[500px] flex items-center justify-center mb-8">
          {/* Outer orbit ring */}
          <OrbitRing size={400} duration={30} />
          
          {/* Middle orbit ring */}
          <OrbitRing size={280} duration={20} reverse />
          
          {/* Inner orbit ring */}
          <OrbitRing size={180} duration={15} />
          
          {/* Orbiting elements */}
          <div className="absolute animate-orbit">
            <div className="w-3 h-3 rounded-full bg-nebula-cyan shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
          </div>
          <div className="absolute animate-orbit-reverse">
            <div className="w-2 h-2 rounded-full bg-nebula-pink shadow-[0_0_15px_rgba(232,121,249,0.8)]" />
          </div>
          <div className="absolute animate-orbit-slow" style={{ animationDelay: '-10s' }}>
            <div className="w-4 h-4 rounded-full bg-nebula-purple shadow-[0_0_25px_rgba(168,85,247,0.8)]" />
          </div>
          
          {/* Central Planet */}
          <Planet />
        </div>
        
        {/* Text content */}
        <ComingSoon />
        
        {/* GitHub Link */}
        <GitHubLink />
        
      </main>
      
      {/* Constellation lines overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="constellation" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="rgba(255,255,255,0.5)" />
              <circle cx="150" cy="100" r="1.5" fill="rgba(255,255,255,0.4)" />
              <circle cx="100" cy="150" r="1" fill="rgba(255,255,255,0.3)" />
              <line x1="50" y1="50" x2="150" y2="100" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
              <line x1="150" y1="100" x2="100" y2="150" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#constellation)" />
        </svg>
      </div>
    </div>
  )
}

export default App
