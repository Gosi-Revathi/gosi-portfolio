import { useState, useEffect } from 'react'
import Terminal from './Terminal'
import { RESUME_URL } from '../data'

const ROLES = [
  'Backend Developer',
  'DevOps Engineer',
  'API Architect',
  'Cloud Practitioner',
]

function TypingRole() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) {
      const t = setTimeout(() => { setDeleting(true); setPaused(false) }, 1800)
      return () => clearTimeout(t)
    }
    const current = ROLES[roleIdx]
    if (!deleting) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75)
        return () => clearTimeout(t)
      } else { setPaused(true) }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
        return () => clearTimeout(t)
      } else {
        setDeleting(false)
        setRoleIdx((roleIdx + 1) % ROLES.length)
      }
    }
  }, [displayed, deleting, paused, roleIdx])

  return (
    <span style={{ color: '#00e5ff', fontFamily: 'Fraunces, serif', fontStyle: 'italic' }}>
      {displayed}
      <span className="term-cursor" style={{ height: '1.1em', verticalAlign: 'text-bottom', marginLeft: 2 }} />
    </span>
  )
}

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ minHeight: '100vh', display: 'grid', alignItems: 'center', padding: '7.5rem 2.5rem 4rem' }}
    >
      {/* Animated grid bg */}
      <div className="absolute inset-0 pointer-events-none animate-bg-grid" style={{
        backgroundImage: 'linear-gradient(rgba(0,229,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,229,255,.03) 1px,transparent 1px)',
        backgroundSize: '48px 48px',
      }} />
      {/* Glow */}
      <div className="absolute pointer-events-none animate-glow-pulse" style={{
        width: 560, height: 560,
        background: 'radial-gradient(circle,rgba(0,229,255,.08) 0%,transparent 70%)',
        top: '50%', left: '45%', transform: 'translate(-50%,-50%)',
      }} />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT */}
        <div>
          {/* Available badge */}
          <div className="animate-fade-up-1 inline-flex items-center gap-2 mb-5 px-3 py-1"
            style={{ background: 'rgba(0,229,255,.07)', border: '1px solid rgba(0,229,255,.2)', fontSize: '.72rem', letterSpacing: '.13em', textTransform: 'uppercase', color: '#00e5ff' }}>
            <span className="inline-block w-[6px] h-[6px] rounded-full bg-cyan animate-dot-pulse" />
            Available for Opportunities
          </div>

          {/* Photo + Name row */}
          <div className="animate-fade-up-2 flex items-center gap-5 mb-4">
            {/* Profile photo */}
            <div style={{ position: 'relative', flexShrink: 0 }}>
              {/* Cyan ring */}
              <div style={{
                position: 'absolute', inset: -3,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00e5ff, #7c3aed)',
                zIndex: 0,
              }} />
              {/* White gap */}
              <div style={{
                position: 'absolute', inset: -1,
                borderRadius: '50%',
                background: '#080810',
                zIndex: 1,
              }} />
              <img
                src="/profile.jpg"
                alt="Gosi Revathi"
                style={{
                  width: 88, height: 88,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  display: 'block',
                  position: 'relative',
                  zIndex: 2,
                }}
              />
              {/* Online dot */}
              <span style={{
                position: 'absolute', bottom: 4, right: 4,
                width: 14, height: 14,
                background: '#10b981',
                borderRadius: '50%',
                border: '2px solid #080810',
                zIndex: 3,
              }} />
            </div>

            {/* Name */}
            <h1 style={{
              fontFamily: 'Syne, sans-serif', fontWeight: 800,
              fontSize: 'clamp(2.8rem,5vw,4.5rem)',
              lineHeight: .95, letterSpacing: '-.035em',
            }}>
              Gosi<br /><span style={{ color: '#00e5ff' }}>Revathi</span>
            </h1>
          </div>

          {/* Typing role */}
          <p className="animate-fade-up-3 mb-5" style={{ fontSize: '1.25rem', minHeight: '2rem' }}>
            <TypingRole />
          </p>

          {/* Description */}
          <p className="animate-fade-up-4 mb-8" style={{ fontSize: '.88rem', lineHeight: 1.85, color: 'rgba(232,232,240,.65)', maxWidth: 420 }}>
            MCA graduate building scalable backend systems with Node.js,
            containerised deployments via Docker & Kubernetes, and CI/CD
            pipelines on AWS & Azure. Turning complex infrastructure into
            clean, reliable code.
          </p>

          {/* CTAs */}
          <div className="animate-fade-up-5 flex flex-wrap gap-3">
            <a href="#contact" className="btn-primary">Get in Touch →</a>
            <a href="#projects" className="btn-ghost">View Projects</a>
            <a
              href={RESUME_URL}
              download="Gosi_Revathi_Resume.pdf"
              className="btn-ghost"
              style={{ borderColor: 'rgba(245,158,11,.4)', color: '#f59e0b' }}
            >
              ↓ Resume
            </a>
          </div>
        </div>

        {/* RIGHT — Terminal (hidden on mobile) */}
        <div className="animate-fade-up-6 hidden md:block">
          <Terminal />
        </div>
      </div>
    </section>
  )
}
