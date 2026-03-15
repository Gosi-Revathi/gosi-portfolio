import { useState } from 'react'
import { useReveal } from '../hooks'
import { CERT_GROUPS } from '../data'
import SectionHeader from './SectionHeader'

const BADGE_COLORS = {
  Elite:  { bg: 'rgba(245,158,11,.1)', border: 'rgba(245,158,11,.3)', color: '#f59e0b' },
  Silver: { bg: 'rgba(148,163,184,.1)', border: 'rgba(148,163,184,.3)', color: '#94a3b8' },
}

function GroupBlock({ cat, icon, items, delay }) {
  const ref = useReveal(delay)
  return (
    <div ref={ref} style={{ background: '#12121c', border: '1px solid #1e1e2e', borderRadius: 2, overflow: 'hidden' }}>
      {/* Group header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 16px', background: '#0e0e18', borderBottom: '1px solid #1e1e2e' }}>
        <span style={{ fontSize: 16 }}>{icon}</span>
        <span style={{ fontSize: '.72rem', fontWeight: 700, color: '#6b6b80', letterSpacing: '.08em', textTransform: 'uppercase' }}>{cat}</span>
      </div>
      {/* Items */}
      <div style={{ padding: '4px 0' }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '11px 16px', borderBottom: i < items.length - 1 ? '1px solid rgba(30,30,46,.6)' : 'none', flexWrap: 'wrap', gap: 6 }}>
            <div>
              <div style={{ fontSize: '.8rem', color: '#e8e8f0', lineHeight: 1.4, display: 'flex', alignItems: 'center', gap: 7 }}>
                {item.name}
                {item.badge && (
                  <span style={{ fontSize: '.62rem', padding: '1px 7px', ...BADGE_COLORS[item.badge] }}>{item.badge}</span>
                )}
              </div>
              <div style={{ fontSize: '.68rem', color: '#6b6b80', marginTop: 3 }}>{item.issuer}</div>
            </div>
            <span style={{ fontSize: '.66rem', color: '#444460', letterSpacing: '.04em', flexShrink: 0 }}>{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Certifications() {
  return (
    <section style={{ padding: '5rem 2.5rem', background: '#0d0d18' }}>
      <SectionHeader num="06" title="Certifications" />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 720 }}>
        {CERT_GROUPS.map((g, i) => (
          <GroupBlock key={i} {...g} delay={i * 80} />
        ))}
      </div>
    </section>
  )
}
