import { useReveal } from '../hooks'
import { EXTRA } from '../data'
import SectionHeader from './SectionHeader'

function ExtraCard({ icon, text, delay }) {
  const ref = useReveal(delay)
  return (
    <div ref={ref} className="card-lift flex items-start gap-4 p-6" style={{ background: '#12121c', border: '1px solid #1e1e2e', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, background: 'linear-gradient(180deg,#00e5ff,#7c3aed)' }} />
      <span style={{ fontSize: '1.6rem', flexShrink: 0 }}>{icon}</span>
      <span style={{ fontSize: '.92rem', lineHeight: 1.75, color: 'rgba(232,232,240,.82)', paddingTop: '.1rem' }}>{text}</span>
    </div>
  )
}

export default function Extracurricular() {
  return (
    <section style={{ padding: '5rem 2.5rem', background: '#0d0d18' }}>
      <SectionHeader num="08" title="Extracurricular & Leadership" />
      <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))' }}>
        {EXTRA.map((e, i) => <ExtraCard key={i} {...e} delay={i * 70} />)}
      </div>
    </section>
  )
}
