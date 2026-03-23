import { useReveal } from '../hooks'
import SectionHeader from './SectionHeader'

function EduCard({ degree, school, year, cgpa, delay }) {
  const ref = useReveal(delay)
  return (
    <div ref={ref} className="p-8" style={{ background: '#12121c', border: '1px solid #1e1e2e' }}>
      <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: '1.6rem', color: '#00e5ff', marginBottom: '.3rem' }}>{degree}</div>
      <div style={{ fontSize: '.95rem', marginBottom: '.3rem' }}>{school}</div>
      <div style={{ fontSize: '.8rem', color: '#6b6b80', marginBottom: '1.3rem' }}>{year}</div>
      <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, lineHeight: 1, fontSize: '2.4rem' }}>
        {cgpa}{' '}
        <span style={{ fontSize: '.78rem', color: '#6b6b80', fontFamily: 'DM Mono, monospace', fontWeight: 400 }}>/ 10 CGPA</span>
      </div>
    </div>
  )
}

export default function Education() {
  return (
    <section id="education" style={{ padding: '5rem 2.5rem' }}>
      <SectionHeader num="07" title="Education" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <EduCard degree="MCA" school="Bangalore City University" year="Graduated 2025" cgpa="8.71" delay={0} />
        <EduCard degree="BCA" school="Vijayanagara Sri Krishnadevaraya University Ballari" year="Graduated 2023" cgpa="8.83" delay={90} />
      </div>
    </section>
  )
}
