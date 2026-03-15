import { useState } from 'react'
import { useReveal } from '../hooks'
import { PROJECTS } from '../data'
import SectionHeader from './SectionHeader'
import ProjectModal from './ProjectModal'

function ProjectCard({ project, delay, onOpen }) {
  const ref = useReveal(delay)
  const [hov, setHov] = useState(false)
  const { n, title, desc, metric, accent, screenshots } = project
  const isCompany = n === '00'
  const hasScreenshot = screenshots && screenshots.length > 0

  return (
    <div
      ref={ref}
      className="card-lift relative overflow-hidden"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={() => onOpen(project)}
      style={{
        background: hov ? '#14141f' : '#12121c',
        border: `1px solid ${hov ? accent + '55' : isCompany ? accent + '30' : '#1e1e2e'}`,
        boxShadow: hov ? `0 18px 40px rgba(0,0,0,.4),0 0 18px ${accent}14` : 'none',
        cursor: 'pointer',
        borderTop: isCompany ? `2px solid ${accent}` : undefined,
      }}
    >
      {/* Screenshot preview for company project */}
      {hasScreenshot && (
        <div style={{ position: 'relative', overflow: 'hidden', height: 140, background: '#0a0a14' }}>
          <img
            src={screenshots[0].img}
            alt={title}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform .4s', transform: hov ? 'scale(1.04)' : 'scale(1)' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, transparent 50%, #12121c)` }} />
          <span style={{ position: 'absolute', top: 8, left: 8, fontSize: '.62rem', padding: '2px 8px', background: 'rgba(0,0,0,.75)', color: accent, border: `1px solid ${accent}40`, backdropFilter: 'blur(4px)' }}>
            🏢 Company Project
          </span>
        </div>
      )}

      <div style={{ padding: isCompany ? '1rem 1.4rem 1.4rem' : '1.7rem' }}>
        {!hasScreenshot && (
          <div style={{ fontSize: '.62rem', color: '#444460', letterSpacing: '.15em', textTransform: 'uppercase', marginBottom: '.65rem' }}>
            Project {n}
          </div>
        )}
        <div className="font-syne font-bold mb-3" style={{ fontSize: '1rem', letterSpacing: '-.01em' }}>{title}</div>
        <p className="mb-4" style={{ fontSize: '.78rem', lineHeight: 1.8, color: 'rgba(232,232,240,.57)' }}>{desc}</p>

        <div className="flex items-center justify-between flex-wrap gap-2">
          <span style={{ background: `${accent}12`, border: `1px solid ${accent}35`, color: accent, padding: '.2rem .6rem', fontSize: '.7rem' }}>
            {metric}
          </span>
          <span style={{ fontSize: '.72rem', letterSpacing: '.05em', transition: 'color .2s', color: hov ? accent : '#444460' }}>
            {hasScreenshot ? 'View screenshots →' : 'View details →'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects" style={{ padding: '5rem 2.5rem', background: '#0d0d18' }}>
      <SectionHeader num="03" title="Projects" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px,1fr))', gap: '1.2rem' }}>
        {PROJECTS.map((p, i) => (
          <ProjectCard key={i} project={p} delay={i * 70} onOpen={setActive} />
        ))}
      </div>
      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  )
}
