import { useReveal } from '../hooks'
import { EXPERIENCE } from '../data'
import SectionHeader from './SectionHeader'

function ExpCard({ title, company, period, accent, pts, delay }) {
  const ref = useReveal(delay)
  return (
    <div ref={ref} className="mb-5 p-8" style={{ background: '#12121c', border: `1px solid #1e1e2e`, borderLeft: `3px solid ${accent}` }}>
      <div className="flex flex-wrap justify-between items-start gap-3 mb-2">
        <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '1.2rem' }}>{title}</span>
        <span style={{ background: `${accent}18`, border: `1px solid ${accent}45`, color: accent, padding: '.28rem .85rem', fontSize: '.75rem', letterSpacing: '.08em', textTransform: 'uppercase' }}>{period}</span>
      </div>
      <div style={{ fontFamily: 'Fraunces, serif', fontStyle: 'italic', fontSize: '.95rem', color: accent === '#00e5ff' ? '#f59e0b' : accent, marginBottom: '1.4rem' }}>{company}</div>
      <ul className="flex flex-col gap-3 list-none">
        {pts.map((p, i) => (
          <li key={i} className="relative pl-5" style={{ fontSize: '.88rem', lineHeight: 1.75, color: 'rgba(232,232,240,.75)' }}>
            <span className="absolute left-0 top-[.3em]" style={{ color: accent, fontSize: '.7rem' }}>▸</span>{p}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '5rem 2.5rem' }}>
      <SectionHeader num="02" title="Experience" />
      {EXPERIENCE.map((e, i) => <ExpCard key={i} {...e} delay={i * 80} />)}
    </section>
  )
}
