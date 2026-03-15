import { useEffect, useRef, useState } from 'react'

/** Attaches .reveal + .in CSS classes for scroll-triggered fade-up */
export function useReveal(delay = 0) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.classList.add('reveal')
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('in'), delay)
          obs.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [delay])
  return ref
}

/** Counts up to target with cubic-ease-out when element enters viewport */
export function useCountUp(target, dec = 0) {
  const [cur, setCur] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect() } },
      { threshold: 0.5 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    let frame, start = null
    const dur = 1400
    const tick = (ts) => {
      if (!start) start = ts
      const prog = Math.min((ts - start) / dur, 1)
      const ease = 1 - Math.pow(1 - prog, 3)
      setCur(parseFloat((ease * target).toFixed(dec)))
      if (prog < 1) frame = requestAnimationFrame(tick)
      else setCur(target)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [started, target, dec])

  return [ref, cur]
}

/** Returns true once element has entered the viewport (one-shot) */
export function useInView(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return [ref, visible]
}
