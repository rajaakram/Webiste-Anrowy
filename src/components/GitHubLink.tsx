import { useEffect, useState } from 'react'

const GitHubLink = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div 
      className={`mt-12 transition-all duration-1000 ease-out ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <a
        href="https://github.com/rajaakram/Webiste-Anrowy"
        target="_blank"
        rel="noopener noreferrer"
        className={`
          group inline-flex items-center gap-3 px-6 py-3 rounded-full
          glass transition-all duration-300
          ${isHovered ? 'bg-white/10 scale-105' : 'bg-white/5'}
        `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* GitHub Icon */}
        <svg
          className={`
            w-6 h-6 transition-all duration-300
            ${isHovered ? 'text-white' : 'text-starlight-dim'}
          `}
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>

        {/* Text */}
        <span 
          className={`
            font-medium transition-all duration-300
            ${isHovered ? 'text-white' : 'text-starlight-dim'}
          `}
        >
          View on GitHub
        </span>

        {/* Arrow */}
        <svg
          className={`
            w-4 h-4 transition-all duration-300
            ${isHovered ? 'text-nebula-cyan translate-x-1' : 'text-starlight-dim'}
          `}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>

        {/* Glow effect on hover */}
        <div 
          className={`
            absolute inset-0 rounded-full transition-opacity duration-300
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
            filter: 'blur(10px)',
            zIndex: -1,
          }}
        />
      </a>

      {/* Repository hint */}
      <p 
        className={`
          text-xs text-starlight-dim/60 mt-3 text-center transition-all duration-500
          ${isHovered ? 'opacity-100' : 'opacity-0'}
        `}
      >
        github.com/rajaakram/Webiste-Anrowy
      </p>
    </div>
  )
}

export default GitHubLink
