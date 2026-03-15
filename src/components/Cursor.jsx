import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const mouse   = useRef({ x: -100, y: -100 })
  const ring    = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const move = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX - 5 + 'px'
        dotRef.current.style.top  = e.clientY - 5 + 'px'
      }
    }
    window.addEventListener('mousemove', move)

    let raf
    const tick = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x - 18 + 'px'
        ringRef.current.style.top  = ring.current.y - 18 + 'px'
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        className="fixed w-[10px] h-[10px] bg-cyan rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ top: -100, left: -100 }}
      />
      <div
        ref={ringRef}
        className="fixed w-9 h-9 border border-cyan rounded-full pointer-events-none z-[9998] opacity-40"
        style={{ top: -100, left: -100 }}
      />
    </>
  )
}
