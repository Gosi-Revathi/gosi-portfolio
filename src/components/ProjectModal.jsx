import { useEffect, useState } from 'react'

export default function ProjectModal({ project, onClose }) {
  const [activeShot, setActiveShot] = useState(0)

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handler)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null
  const { title, n, accent, tech, detail, outcome, github, metric, screenshots } = project
  const hasRepo = github && github.length > 0
  const hasScreenshots = screenshots && screenshots.length > 0

  return (
    <div
      className="modal-overlay open"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="modal-box">
        {/* Header */}
        <div className="flex justify-between items-start mb-5">
          <div>
            <div style={{ fontSize: '.68rem', color: '#444460', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '.4rem' }}>
              {n === '00' ? 'Company Project' : `Project ${n}`}
            </div>
            <h3 className="font-syne font-bold" style={{ fontSize: '1.5rem', letterSpacing: '-.02em' }}>{title}</h3>
          </div>
          <button onClick={onClose}
            style={{ background: 'rgba(255,255,255,.06)', border: '1px solid #1e1e2e', color: '#6b6b80', width: 36, height: 36, cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginLeft: '1rem' }}>
            ✕
          </button>
        </div>

        {/* Metric badge */}
        <div className="mb-5">
          <span style={{ background: `${accent}12`, border: `1px solid ${accent}35`, color: accent, padding: '.28rem .75rem', fontSize: '.78rem', letterSpacing: '.04em' }}>
            {metric}
          </span>
          {n === '00' && (
            <span style={{ marginLeft: 8, background: 'rgba(16,185,129,.08)', border: '1px solid rgba(16,185,129,.25)', color: '#10b981', padding: '.28rem .75rem', fontSize: '.78rem' }}>
              🏢 E-S-Genius Tech Solutions
            </span>
          )}
        </div>

        {/* Screenshot gallery — shown for company project */}
        {hasScreenshots && (
          <div className="mb-6">
            <div style={{ fontSize: '.72rem', color: '#6b6b80', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '.8rem' }}>
              Live Application Screenshots
            </div>

            {/* Main image */}
            <div style={{ position: 'relative', borderRadius: 2, overflow: 'hidden', background: '#0a0a14', border: `1px solid ${accent}30`, marginBottom: '.6rem' }}>
              <img
                src={screenshots[activeShot].img}
                alt={screenshots[activeShot].caption}
                style={{ width: '100%', display: 'block', maxHeight: 320, objectFit: 'contain' }}
              />
              {/* Caption bar */}
              <div style={{ background: 'rgba(0,0,0,.75)', padding: '.5rem .9rem', fontSize: '.74rem', color: 'rgba(232,232,240,.8)', backdropFilter: 'blur(4px)' }}>
                {screenshots[activeShot].caption}
              </div>
            </div>

            {/* Thumbnail strip */}
            <div style={{ display: 'flex', gap: '.5rem' }}>
              {screenshots.map((s, i) => (
                <div key={i} onClick={() => setActiveShot(i)}
                  style={{ flex: 1, cursor: 'pointer', border: `2px solid ${i === activeShot ? accent : '#1e1e2e'}`, overflow: 'hidden', transition: 'border-color .2s', borderRadius: 2 }}>
                  <img src={s.img} alt={`Screenshot ${i + 1}`}
                    style={{ width: '100%', height: 56, objectFit: 'cover', display: 'block', opacity: i === activeShot ? 1 : 0.5, transition: 'opacity .2s' }} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tech stack */}
        <div className="mb-5">
          <div style={{ fontSize: '.72rem', color: '#6b6b80', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '.6rem' }}>Tech Stack</div>
          <div className="flex flex-wrap gap-2">
            {tech.map(t => (
              <span key={t} style={{ background: `${accent}0d`, border: `1px solid ${accent}25`, color: accent, padding: '.2rem .65rem', fontSize: '.76rem' }}>{t}</span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="sec-divider mb-5" />

        {/* Detail */}
        <div className="mb-5">
          <div style={{ fontSize: '.72rem', color: '#6b6b80', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '.6rem' }}>Overview</div>
          <p style={{ fontSize: '.84rem', lineHeight: 1.85, color: 'rgba(232,232,240,.72)' }}>{detail}</p>
        </div>

        {/* Outcome */}
        <div className="mb-6 p-4"
          style={{ background: `${accent}07`, border: `1px solid ${accent}20`, borderLeft: `3px solid ${accent}` }}>
          <div style={{ fontSize: '.7rem', color: accent, letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '.45rem' }}>Outcome</div>
          <p style={{ fontSize: '.82rem', lineHeight: 1.8, color: 'rgba(232,232,240,.7)' }}>{outcome}</p>
        </div>

        {/* Footer — GitHub or private notice */}
        {hasRepo ? (
          <a href={github} target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', background: 'transparent', border: '1px solid #1e1e2e', color: '#e8e8f0', padding: '.65rem 1.2rem', fontSize: '.8rem', textDecoration: 'none', transition: 'border-color .2s, color .2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#00e5ff'; e.currentTarget.style.color = '#00e5ff' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#1e1e2e'; e.currentTarget.style.color = '#e8e8f0' }}>
            🐙 View on GitHub
          </a>
        ) : (
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.6rem', background: 'rgba(107,107,128,.06)', border: '1px solid #1e1e2e', color: '#6b6b80', padding: '.65rem 1.2rem', fontSize: '.8rem' }}>
            🔒 Private repository — screenshots shown above
          </div>
        )}
      </div>
    </div>
  )
}
