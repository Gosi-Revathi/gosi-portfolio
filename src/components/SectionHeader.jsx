import { useReveal } from '../hooks'

export default function SectionHeader({ num, title }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="flex items-baseline gap-4 mb-12">
      <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '.8rem', color: '#00e5ff', opacity: .5 }}>{num}</span>
      <h2 style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 'clamp(2rem,3.5vw,3rem)', letterSpacing: '-.03em', whiteSpace: 'nowrap', color: '#e8e8f0' }}>
        {title}
      </h2>
      <div style={{ flex: 1, height: 1, background: '#1e1e2e', marginBottom: '.2rem' }} />
    </div>
  )
}
