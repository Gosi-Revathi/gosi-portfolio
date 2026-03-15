import { useInView } from '../hooks'
import { LANGUAGES } from '../data'
import SectionHeader from './SectionHeader'

function LangBar({ name, level, pct, delay }) {
  const [ref, visible] = useInView()
  return (
    <div
      ref={ref}
      style={{
        background: '#12121c', border: '1px solid #1e1e2e', padding: '1.4rem 1.8rem',
        opacity: visible ? 1 : 0, transform: visible ? 'none' : 'translateY(20px)',
        transition: `opacity .6s ${delay}ms ease, transform .6s ${delay}ms ease`,
      }}
    >
      <div className="flex justify-between items-baseline mb-3">
        <span className="font-syne font-bold" style={{ fontSize: '.95rem' }}>{name}</span>
        <span style={{ fontSize: '.66rem', color: '#6b6b80', letterSpacing: '.08em', textTransform: 'uppercase' }}>{level}</span>
      </div>
      <div className="lang-bar-track">
        <div
          className={`lang-bar-fill${visible ? ' in' : ''}`}
          style={{ width: `${pct}%`, transitionDelay: `${delay + 200}ms` }}
        />
      </div>
    </div>
  )
}

export default function Languages() {
  return (
    <section style={{ padding: '5rem 2.5rem', background: '#080810' }}>
      <SectionHeader num="09" title="Languages" />
      <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))' }}>
        {LANGUAGES.map((l, i) => (
          <LangBar key={i} {...l} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}
