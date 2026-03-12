import { useEffect, useRef } from 'react'

const glyphs = '01{}[]<>/\\=+-*#%&$ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export default function SkillsMatrixRain() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) {
      return undefined
    }

    const context = canvas.getContext('2d')
    if (!context) {
      return undefined
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let animationFrameId = 0
    let resizeObserver = null
    let columns = []
    let fontSize = 18
    let width = 0
    let height = 0

    const randomGlyph = () => glyphs[Math.floor(Math.random() * glyphs.length)]

    const resetColumns = () => {
      const totalColumns = Math.ceil(width / fontSize)
      columns = Array.from({ length: totalColumns }, () => ({
        y: Math.random() * -height,
        speed: 0.38 + Math.random() * 0.72,
        alpha: 0.18 + Math.random() * 0.36,
      }))
    }

    const resizeCanvas = () => {
      const parent = canvas.parentElement
      if (!parent) {
        return
      }

      width = parent.clientWidth
      height = parent.clientHeight
      fontSize = width < 640 ? 14 : 18

      const dpr = window.devicePixelRatio || 1
      canvas.width = Math.max(Math.floor(width * dpr), 1)
      canvas.height = Math.max(Math.floor(height * dpr), 1)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      context.font = `${fontSize}px monospace`
      context.textBaseline = 'top'

      resetColumns()
    }

    const draw = () => {
      context.fillStyle = 'rgba(8, 5, 18, 0.2)'
      context.fillRect(0, 0, width, height)

      columns.forEach((column, index) => {
        const x = index * fontSize
        const glyph = randomGlyph()

        context.fillStyle = `rgba(190, 124, 255, ${column.alpha})`
        context.fillText(glyph, x, column.y)

        context.fillStyle = `rgba(245, 222, 255, ${Math.min(column.alpha + 0.24, 0.88)})`
        context.fillText(randomGlyph(), x, column.y - fontSize * 0.9)

        column.y += fontSize * column.speed

        if (column.y > height + fontSize * 2 && Math.random() > 0.972) {
          column.y = Math.random() * -height * 0.4
          column.speed = 0.38 + Math.random() * 0.72
          column.alpha = 0.18 + Math.random() * 0.36
        }
      })

      animationFrameId = window.requestAnimationFrame(draw)
    }

    const handleMotionChange = () => {
      window.cancelAnimationFrame(animationFrameId)
      if (mediaQuery.matches) {
        context.clearRect(0, 0, width, height)
        return
      }

      draw()
    }

    resizeCanvas()

    if (!mediaQuery.matches) {
      draw()
    }

    if ('ResizeObserver' in window) {
      resizeObserver = new ResizeObserver(resizeCanvas)
      resizeObserver.observe(canvas.parentElement)
    } else {
      window.addEventListener('resize', resizeCanvas)
    }

    mediaQuery.addEventListener('change', handleMotionChange)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      mediaQuery.removeEventListener('change', handleMotionChange)

      if (resizeObserver) {
        resizeObserver.disconnect()
      } else {
        window.removeEventListener('resize', resizeCanvas)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="skills-matrix-canvas" aria-hidden="true" />
}
