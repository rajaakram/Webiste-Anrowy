import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  twinkleSpeed: number
  twinklePhase: number
}

const StarField = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    const initStars = () => {
      const stars: Star[] = []
      const numStars = Math.floor((canvas.width * canvas.height) / 3000)
      
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
        })
      }
      starsRef.current = stars
    }

    const drawStars = (time: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      starsRef.current.forEach((star) => {
        // Calculate twinkling opacity
        const twinkle = Math.sin(time * star.twinkleSpeed + star.twinklePhase)
        const currentOpacity = star.opacity * (0.5 + 0.5 * twinkle)
        
        // Draw star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(240, 244, 255, ${currentOpacity})`
        ctx.fill()
        
        // Add glow for larger stars
        if (star.size > 1.5) {
          ctx.beginPath()
          ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2)
          const gradient = ctx.createRadialGradient(
            star.x, star.y, 0,
            star.x, star.y, star.size * 2
          )
          gradient.addColorStop(0, `rgba(240, 244, 255, ${currentOpacity * 0.3})`)
          gradient.addColorStop(1, 'transparent')
          ctx.fillStyle = gradient
          ctx.fill()
        }
      })

      // Draw occasional shooting star
      if (Math.random() < 0.005) {
        drawShootingStar()
      }

      animationRef.current = requestAnimationFrame(drawStars)
    }

    const drawShootingStar = () => {
      const startX = Math.random() * canvas.width + 200
      const startY = Math.random() * canvas.height * 0.5
      const length = Math.random() * 100 + 50
      
      let progress = 0
      const animateShootingStar = () => {
        progress += 0.02
        if (progress > 1) return
        
        const x = startX - progress * 400
        const y = startY + progress * 200
        
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x + length * (1 - progress), y - length * 0.5 * (1 - progress))
        ctx.strokeStyle = `rgba(240, 244, 255, ${(1 - progress) * 0.8})`
        ctx.lineWidth = 2
        ctx.stroke()
        
        // Glow
        const gradient = ctx.createLinearGradient(x, y, x + length, y - length * 0.5)
        gradient.addColorStop(0, `rgba(34, 211, 238, ${(1 - progress) * 0.5})`)
        gradient.addColorStop(1, 'transparent')
        ctx.strokeStyle = gradient
        ctx.lineWidth = 4
        ctx.stroke()
        
        requestAnimationFrame(animateShootingStar)
      }
      animateShootingStar()
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    animationRef.current = requestAnimationFrame(drawStars)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}

export default StarField
