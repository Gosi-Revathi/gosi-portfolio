import { useState } from 'react'
import { useReveal } from '../hooks'
import { AWARDS, PARTICIPATIONS } from '../data'
import SectionHeader from './SectionHeader'

function AwardCard({ title, event, org, date, desc, icon, accent, delay }) {
  const ref = useReveal(delay)
  const [hov, setHov] = useState(false)
  return (
    <div
      ref={ref}
      className="card-lift"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? '#14141f' : '#12121c',
        border: `1px solid ${hov ? accent + '45' : '#1e1e2e'}`,
        borderTop: `2px solid ${accent}`,
        padding: '1.6rem',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '.7rem' }}>
        <span style={{ fontSize: '1.6rem' }}>{icon}</span>
        <span style={{ fontSize: '.64rem', color: '#444460', letterSpacing: '.06em' }}>{date}</span>
      </div>
      <div className="font-syne font-bold" style={{ fontSize: '1rem', marginBottom: '.3rem', letterSpacing: '-.01em' }}>{title}</div>
      <div style={{ fontSize: '.72rem', color: accent, marginBottom: '.7rem', fontStyle: 'italic' }}>{event} · {org}</div>
      <p style={{ fontSize: '.75rem', lineHeight: 1.75, color: 'rgba(232,232,240,.6)' }}>{desc}</p>
    </div>
  )
}

function ParticipationRow({ event, fest, org, date, delay }) {
  const ref = useReveal(delay)
  return (
    <div ref={ref} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8, padding: '12px 16px', background: '#12121c', border: '1px solid #1e1e2e' }}>
      <div>
        <div style={{ fontSize: '.78rem', color: '#e8e8f0' }}>{event}
          <span style={{ fontSize: '.68rem', color: '#6b6b80', marginLeft: 8 }}>— {fest}</span>
        </div>
        <div style={{ fontSize: '.66rem', color: '#444460', marginTop: 3 }}>{org}</div>
      </div>
      <span style={{ fontSize: '.64rem', color: '#444460', letterSpacing: '.05em', flexShrink: 0 }}>{date}</span>
    </div>
  )
}

export default function Awards() {
  return (
    <section style={{ padding: '5rem 2.5rem' }}>
      <SectionHeader num="05" title="Awards & Recognition" />

      {/* Award cards grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(260px,1fr))', gap: '1.1rem', marginBottom: '3rem' }}>
        {AWARDS.map((a, i) => <AwardCard key={i} {...a} delay={i * 70} />)}
      </div>

      {/* Tech fest participations */}
      <div style={{ fontSize: '.68rem', color: '#6b6b80', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '.8rem' }}>
        Tech Fest Participations
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '.5rem', maxWidth: 680 }}>
        {PARTICIPATIONS.map((p, i) => <ParticipationRow key={i} {...p} delay={i * 60} />)}
      </div>
    </section>
  )
}
