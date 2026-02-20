/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        space: {
          900: '#0a0a1a',
          800: '#0f0f2d',
          700: '#1a1a3e',
          600: '#252555',
        },
        cosmic: {
          purple: '#6b4c9a',
          blue: '#4c6b9a',
          glow: '#8b5cf6',
        },
        starlight: {
          white: '#f0f4ff',
          dim: '#a0a8c9',
        },
        nebula: {
          pink: '#e879f9',
          cyan: '#22d3ee',
          purple: '#a855f7',
        }
      },
      animation: {
        'orbit': 'orbit 20s linear infinite',
        'orbit-reverse': 'orbit-reverse 25s linear infinite',
        'orbit-slow': 'orbit 35s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'twinkle': 'twinkle 4s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(120px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(120px) rotate(-360deg)' },
        },
        'orbit-reverse': {
          '0%': { transform: 'rotate(0deg) translateX(180px) rotate(0deg)' },
          '100%': { transform: 'rotate(-360deg) translateX(180px) rotate(360deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.05)' },
        },
        twinkle: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 1 },
        },
      },
      backgroundImage: {
        'space-gradient': 'radial-gradient(ellipse at center, #1a1a3e 0%, #0a0a1a 70%, #050510 100%)',
        'cosmic-glow': 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
}
