import { useEffect, useState } from 'react'
import { NAV, RESUME_URL } from '../data'

export default function Nav() {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const sections = NAV.map(n => document.getElementById(n.toLowerCase())).filter(Boolean)
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { threshold: 0.35 }
    )
    sections.forEach(s => obs.observe(s))
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { obs.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])

  // Close menu on nav link click
  const handleNavClick = () => setMenuOpen(false)

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 h-14"
        style={{
          background: scrolled ? 'rgba(8,8,16,.95)' : 'rgba(8,8,16,.7)',
          backdropFilter: 'blur(14px)',
          borderBottom: `1px solid ${scrolled ? '#1e1e2e' : 'transparent'}`,
          transition: 'background .3s, border-color .3s',
        }}
      >
        {/* Logo + photo */}
        <div className="flex items-center gap-3">
          <div style={{ position: 'relative', width: 32, height: 32, flexShrink: 0 }}>
            <div style={{ position: 'absolute', inset: -2, borderRadius: '50%', background: 'linear-gradient(135deg,#00e5ff,#7c3aed)' }} />
            <img src="/profile.jpg" alt="GR"
              style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', display: 'block', position: 'relative', zIndex: 1 }} />
          </div>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.05rem', color: '#00e5ff', letterSpacing: '-.02em' }}>GR_</span>
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 list-none items-center">
          {NAV.map(n => (
            <li key={n}>
              <a href={`#${n.toLowerCase()}`} className="nav-link"
                style={{ color: active === n.toLowerCase() ? '#00e5ff' : '#6b6b80' }}>
                {n}
              </a>
            </li>
          ))}
          <li>
            <a href={RESUME_URL} download="Gosi_Revathi_Resume.pdf"
              style={{ background: 'transparent', border: '1px solid rgba(245,158,11,.35)', color: '#f59e0b', padding: '.3rem .9rem', fontSize: '.72rem', letterSpacing: '.08em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background .2s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'rgba(245,158,11,.1)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}>
              ↓ Resume
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          aria-label="Toggle menu"
        >
          {[0,1,2].map(i => (
            <span key={i} style={{
              display: 'block', width: 22, height: 2, background: '#e8e8f0', borderRadius: 2,
              transition: 'all .25s',
              transform: menuOpen
                ? i === 0 ? 'rotate(45deg) translateY(7px)'
                : i === 1 ? 'scaleX(0)'
                : 'rotate(-45deg) translateY(-7px)'
                : 'none',
              opacity: menuOpen && i === 1 ? 0 : 1,
            }} />
          ))}
        </button>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className="md:hidden fixed top-14 left-0 right-0 z-[99]"
        style={{
          background: 'rgba(8,8,16,.98)',
          backdropFilter: 'blur(14px)',
          borderBottom: '1px solid #1e1e2e',
          maxHeight: menuOpen ? '400px' : '0',
          overflow: 'hidden',
          transition: 'max-height .3s ease',
        }}
      >
        <div style={{ padding: '1rem 2rem 1.5rem' }}>
          {/* Mini profile in mobile menu */}
          <div className="flex items-center gap-3 mb-4 pb-4" style={{ borderBottom: '1px solid #1e1e2e' }}>
            <img src="/profile.jpg" alt="Gosi Revathi"
              style={{ width: 40, height: 40, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', border: '1px solid #00e5ff' }} />
            <div>
              <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '.9rem' }}>Gosi Revathi</div>
              <div style={{ fontSize: '.72rem', color: '#6b6b80' }}>Backend & DevOps Engineer</div>
            </div>
          </div>

          <ul className="flex flex-col gap-1 list-none">
            {NAV.map(n => (
              <li key={n}>
                <a
                  href={`#${n.toLowerCase()}`}
                  onClick={handleNavClick}
                  style={{ display: 'block', padding: '.65rem 0', fontSize: '.85rem', letterSpacing: '.06em', textTransform: 'uppercase', textDecoration: 'none', color: active === n.toLowerCase() ? '#00e5ff' : '#6b6b80', borderBottom: '1px solid #1e1e2e', transition: 'color .2s' }}
                >
                  {n}
                </a>
              </li>
            ))}
            <li style={{ marginTop: '.75rem' }}>
              <a href={RESUME_URL} download="Gosi_Revathi_Resume.pdf"
                onClick={handleNavClick}
                style={{ display: 'inline-block', background: 'rgba(245,158,11,.1)', border: '1px solid rgba(245,158,11,.35)', color: '#f59e0b', padding: '.5rem 1.2rem', fontSize: '.75rem', letterSpacing: '.08em', textTransform: 'uppercase', textDecoration: 'none' }}>
                ↓ Download Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
