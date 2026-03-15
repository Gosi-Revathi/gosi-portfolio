import { useState } from 'react'
import { useReveal } from '../hooks'
import { SKILLS } from '../data'
import SectionHeader from './SectionHeader'

function SkillCard({ icon, cat, tags, delay }) {
  const ref = useReveal(delay)
  const [hov, setHov] = useState(false)

  return (
    <div
      ref={ref}
      className="card-lift relative overflow-hidden p-7"
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? '#14141f' : '#12121c',
        border: `1px solid ${hov ? 'rgba(0,229,255,.32)' : '#1e1e2e'}`,
      }}
    >
      {/* Top colour bar */}
      <div
        className="skill-bar absolute top-0 left-0 right-0"
        style={{ transform: hov ? 'scaleX(1)' : 'scaleX(0)' }}
      />
      <div className="text-[1.6rem] mb-4">{icon}</div>
      <div className="font-syne font-bold uppercase tracking-widest text-cyan mb-4" style={{ fontSize: '.82rem' }}>{cat}</div>
      <div className="flex flex-wrap gap-[6px]">
        {tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="px-10 py-20" style={{ background: '#0d0d18' }}>
      <SectionHeader num="01" title="Tech Stack" />
      <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(auto-fill,minmax(250px,1fr))' }}>
        {SKILLS.map((s, i) => <SkillCard key={i} {...s} delay={i * 60} />)}
      </div>
    </section>
  )
}
