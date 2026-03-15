import { useState } from 'react'
import { useReveal, useInView } from '../hooks'
import SectionHeader from './SectionHeader'

const CERTS = {
  award: {
    label: 'Awards',
    emoji: '🏆',
    accent: '#f59e0b',
    items: [
      {
        img: '/certs/cert-samvarthana-researcher.jpg',
        title: 'Best Researcher',
        org: 'Nagarjuna Degree College',
        date: '2025',
        skills: ['Research', 'AI/ML', 'Paper Writing'],
        highlight: true,
        desc: 'Awarded at Samvarthana 2025 for outstanding paper presentation on AI in Mental Health Care Research.',
      },
      {
        img: '/certs/cert-samvarthana-excellence.jpg',
        title: 'Academic Excellence Award',
        org: 'Nagarjuna Degree College',
        date: '2025',
        skills: ['Academic Performance', 'MCA'],
        highlight: true,
        desc: 'Recognised for outstanding academic performance in MCA for the academic year 2024–25.',
      },
      {
        img: '/certs/cert-ndc-web-design.jpg',
        title: 'Runner-up — Web Designing',
        org: 'NDC Fest 2024',
        date: 'Jun 2024',
        skills: ['Web Design', 'HTML/CSS', 'UI/UX'],
        highlight: true,
        desc: 'Won I/II prize in the Web Designing competition at the Techno, Commerce & Cultural Fest.',
      },
      {
        img: '/certs/cert-ndc-fest-stage.jpg',
        title: 'Award Ceremony — On Stage',
        org: 'NDC Fest 2024',
        date: 'Jun 2024',
        skills: ['Recognition'],
        highlight: false,
        desc: 'Receiving the award on stage at NDC Fest 2024, Nagarjuna Degree College.',
      },
    ],
  },
  cert: {
    label: 'Certifications',
    emoji: '📜',
    accent: '#00e5ff',
    items: [
      {
        img: '/certs/cert-nptel-python.jpg',
        title: 'Joy of Computing using Python',
        org: 'NPTEL — IIT Madras',
        date: 'Jan–Apr 2025',
        skills: ['Python', 'Programming', 'Algorithms'],
        highlight: true,
        badge: 'Elite',
        desc: 'NPTEL Elite certification from IIT Madras with 60% score. 12-week course.',
      },
      {
        img: '/certs/cert-nptel-java.jpg',
        title: 'Programming in Java',
        org: 'NPTEL — IIT Kharagpur',
        date: 'Jul–Oct 2024',
        skills: ['Java', 'OOP', 'Data Structures'],
        highlight: false,
        desc: 'NPTEL certification from IIT Kharagpur with 54% score. 12-week course.',
      },
      {
        img: '/certs/cert-nasscom-data.jpg',
        title: 'Fundamentals of Data Analytics',
        org: 'NASSCOM FutureSkills Prime',
        date: 'Feb 2025',
        skills: ['Data Analytics', 'Statistics'],
        highlight: true,
        badge: 'Silver',
        desc: 'Silver category (60–69%) from NASSCOM FutureSkills Prime, approved by Govt. of India.',
      },
      {
        img: '/certs/cert-fullstack.jpg',
        title: 'Full Stack Development',
        org: 'Seminarroom × Nagarjuna DC',
        date: 'Aug–Nov 2024',
        skills: ['Full Stack', 'Node.js', 'React'],
        highlight: false,
        desc: 'Certificate of Completion for Full Stack Development course by Seminarroom Education Pvt Ltd.',
      },
    ],
  },
  research: {
    label: 'Research',
    emoji: '📄',
    accent: '#7c3aed',
    items: [
      {
        img: '/certs/cert-ergmet-presentation.jpg',
        title: 'Certificate of Presentation',
        org: 'ERGMET 2024 — Nagarjuna DC',
        date: 'Sep 2024',
        skills: ['AI', 'Mental Health', 'Research', 'NLP'],
        highlight: true,
        desc: 'Presented "AI in Mental Health Care Research" at Two-Day National Conference on Emerging AI Technologies.',
      },
    ],
  },
  hackathon: {
    label: 'Tech Events',
    emoji: '⚡',
    accent: '#10b981',
    items: [
      {
        img: '/certs/cert-prajna-volunteer.jpg',
        title: 'IT Manager — Volunteer',
        org: 'Prajna Fest 2025 · NDC',
        date: 'Apr 2025',
        skills: ['Leadership', 'Event Management', 'IT'],
        highlight: true,
        desc: 'Led IT committee for Prajna — intercollegiate fest covering technical, cultural and live music events.',
      },
      {
        img: '/certs/cert-aprameya-nmit.jpg',
        title: 'Code Asura — APRAMEYA',
        org: 'NMIT Bengaluru',
        date: 'Feb 2025',
        skills: ['Competitive Coding', 'Problem Solving'],
        highlight: false,
        desc: 'Participated in Code Asura at APRAMEYA Technical Fest, Nitte Meenakshi Institute of Technology.',
      },
      {
        img: '/certs/cert-bms-technix.jpg',
        title: 'Code of Phoenix — TECHNIX 6.0',
        org: 'BMS Institute of Technology',
        date: 'Feb 2025',
        skills: ['Coding', 'Tech Fest'],
        highlight: false,
        desc: 'Participated in Code of Phoenix at TECHNIX 6.0, BMS Institute of Technology, Yelahanka.',
      },
      {
        img: '/certs/cert-tredge-2k23.jpg',
        title: 'Code Prodigies — TREDGE 2k23',
        org: 'Shree Medha Degree College',
        date: 'Jul 2023',
        skills: ['Coding', 'Competition'],
        highlight: false,
        desc: 'Participated in Code Prodigies at TREDGE 2k23 — Treasure of Knowledge fest.',
      },
    ],
  },
}

const STATS = [
  { num: '13+', label: 'Total Achievements', accent: '#00e5ff' },
  { num: '3',   label: 'Awards Won',          accent: '#f59e0b' },
  { num: '2',   label: 'NPTEL Certifications',accent: '#00e5ff' },
  { num: '4',   label: 'Tech Events',         accent: '#10b981' },
]

const BADGE_STYLE = {
  Elite:  { bg: 'rgba(245,158,11,.15)', color: '#f59e0b', border: 'rgba(245,158,11,.3)' },
  Silver: { bg: 'rgba(148,163,184,.15)', color: '#94a3b8', border: 'rgba(148,163,184,.3)' },
}

// ── Lightbox ──────────────────────────────────────────────────────────
function Lightbox({ items, startIdx, onClose }) {
  const [cur, setCur] = useState(startIdx)
  const c = items[cur]

  const prev = () => setCur(i => (i - 1 + items.length) % items.length)
  const next = () => setCur(i => (i + 1) % items.length)

  return (
    <div
      onClick={e => e.target === e.currentTarget && onClose()}
      style={{ position: 'fixed', inset: 0, zIndex: 600, background: 'rgba(0,0,0,.93)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem', backdropFilter: 'blur(8px)' }}
    >
      <div style={{ maxWidth: 820, width: '100%', position: 'relative' }}>
        {/* Top bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '.6rem' }}>
          <span style={{ fontSize: '.75rem', color: '#6b6b80' }}>{cur + 1} / {items.length}</span>
          <button onClick={onClose} style={{ background: 'rgba(255,255,255,.08)', border: '1px solid #333', color: '#aaa', width: 36, height: 36, cursor: 'pointer', fontSize: '1rem', borderRadius: 4 }}>✕</button>
        </div>

        {/* Image */}
        <div style={{ background: '#0a0a14', border: '1px solid #1e1e2e', borderRadius: 4, overflow: 'hidden' }}>
          <img src={c.img} alt={c.title} style={{ width: '100%', maxHeight: '68vh', objectFit: 'contain', display: 'block' }} />
        </div>

        {/* Info */}
        <div style={{ background: '#12121c', padding: '1rem 1.4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', borderTop: `2px solid ${c.accent||'#1e1e2e'}` }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '1.05rem', color: '#e8e8f0', marginBottom: 3 }}>{c.title}</div>
            <div style={{ fontSize: '.78rem', color: '#6b6b80', marginBottom: 6 }}>{c.org} · {c.date}</div>
            {c.desc && <div style={{ fontSize: '.78rem', color: 'rgba(232,232,240,.65)', lineHeight: 1.6 }}>{c.desc}</div>}
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, alignSelf: 'flex-start' }}>
            {c.skills?.map(s => <span key={s} style={{ fontSize: '.65rem', padding: '2px 8px', background: 'rgba(255,255,255,.06)', border: '1px solid #2a2a3e', color: 'rgba(232,232,240,.6)', borderRadius: 2 }}>{s}</span>)}
          </div>
        </div>

        {/* Nav arrows */}
        {items.length > 1 && <>
          <button onClick={prev} style={{ position: 'absolute', left: -52, top: '40%', background: '#12121c', border: '1px solid #1e1e2e', color: '#e8e8f0', width: 40, height: 40, cursor: 'pointer', fontSize: '1.3rem', borderRadius: 4 }}>‹</button>
          <button onClick={next} style={{ position: 'absolute', right: -52, top: '40%', background: '#12121c', border: '1px solid #1e1e2e', color: '#e8e8f0', width: 40, height: 40, cursor: 'pointer', fontSize: '1.3rem', borderRadius: 4 }}>›</button>
        </>}
      </div>
    </div>
  )
}

// ── Single Card ───────────────────────────────────────────────────────
function Card({ item, accent, onOpen, delay, compact }) {
  const ref = useReveal(delay)
  const [hov, setHov] = useState(false)

  return (
    <div ref={ref}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      onClick={onOpen}
      style={{
        cursor: 'pointer',
        background: hov ? '#14141f' : '#12121c',
        border: `1px solid ${hov ? accent + '55' : '#1e1e2e'}`,
        borderRadius: 4, overflow: 'hidden',
        display: 'flex', flexDirection: 'column',
        transform: hov ? 'translateY(-5px)' : 'none',
        boxShadow: hov ? `0 16px 40px rgba(0,0,0,.4), 0 0 20px ${accent}15` : '0 2px 8px rgba(0,0,0,.2)',
        transition: 'all .28s cubic-bezier(.22,1,.36,1)',
      }}
    >
      {/* Thumbnail */}
      <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/3', background: '#0a0a14', flexShrink: 0 }}>
        <img src={item.img} alt={item.title} loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', display: 'block', transition: 'transform .4s', transform: hov ? 'scale(1.07)' : 'scale(1)' }} />

        {/* Hover overlay */}
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom,${accent}20,rgba(0,0,0,.7))`, opacity: hov ? 1 : 0, transition: 'opacity .3s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ background: 'rgba(0,0,0,.65)', border: `1px solid ${accent}`, color: accent, padding: '.35rem .9rem', fontSize: '.72rem', fontFamily: 'Syne,sans-serif', fontWeight: 700, backdropFilter: 'blur(4px)' }}>
            View Certificate
          </span>
        </div>

        {/* Badges */}
        {item.highlight && <span style={{ position: 'absolute', top: 8, right: 8, fontSize: '.95rem', filter: `drop-shadow(0 0 5px rgba(245,158,11,.7))` }}>⭐</span>}
        {item.badge && (
          <span style={{ position: 'absolute', bottom: 8, right: 8, fontSize: '.6rem', padding: '2px 7px', ...BADGE_STYLE[item.badge], borderRadius: 2, border: `1px solid ${BADGE_STYLE[item.badge].border}` }}>{item.badge}</span>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: '.9rem 1rem', flex: 1, display: 'flex', flexDirection: 'column', gap: 4 }}>
        <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '.84rem', color: '#e8e8f0', lineHeight: 1.3 }}>{item.title}</div>
        <div style={{ fontSize: '.7rem', color: '#6b6b80' }}>{item.org}</div>
        <div style={{ fontSize: '.65rem', color: '#444460', letterSpacing: '.03em' }}>{item.date}</div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 3, marginTop: 'auto', paddingTop: 6 }}>
          {item.skills.slice(0, 3).map(s => (
            <span key={s} style={{ fontSize: '.6rem', padding: '2px 6px', background: `${accent}0d`, border: `1px solid ${accent}22`, color: accent, borderRadius: 2 }}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Category Row ──────────────────────────────────────────────────────
function CategoryRow({ catKey, cat, onOpenLightbox, rowDelay }) {
  const [expanded, setExpanded] = useState(false)
  const headerRef = useReveal(rowDelay)
  const { accent, emoji, label, items } = cat

  // First highlighted item shown by default, rest hidden
  const featured = items.find(i => i.highlight) || items[0]
  const rest = items.filter(i => i !== featured)
  const hiddenCount = rest.length

  // Attach accent to each item for lightbox
  const itemsWithAccent = items.map(i => ({ ...i, accent }))

  return (
    <div style={{ marginBottom: '2.5rem' }}>
      {/* Category header */}
      <div ref={headerRef} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.2rem' }}>
        {/* Emoji + label */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
          <span style={{ fontSize: '1.2rem' }}>{emoji}</span>
          <span style={{ fontFamily: 'Syne,sans-serif', fontWeight: 700, fontSize: '1rem', color: '#e8e8f0', letterSpacing: '-.01em' }}>{label}</span>
          <span style={{ fontSize: '.68rem', background: `${accent}12`, border: `1px solid ${accent}30`, color: accent, padding: '2px 8px', borderRadius: 10 }}>{items.length}</span>
        </div>

        {/* Divider */}
        <div style={{ flex: 1, height: 1, background: '#1e1e2e' }} />

        {/* Expand / collapse button */}
        {hiddenCount > 0 && (
          <button
            onClick={() => setExpanded(e => !e)}
            style={{ display: 'flex', alignItems: 'center', gap: '.4rem', background: 'transparent', border: `1px solid ${expanded ? accent + '50' : '#1e1e2e'}`, color: expanded ? accent : '#6b6b80', padding: '.32rem .9rem', fontSize: '.72rem', fontFamily: 'Syne,sans-serif', fontWeight: 700, cursor: 'pointer', borderRadius: 2, transition: 'all .2s', letterSpacing: '.04em', whiteSpace: 'nowrap' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = accent; e.currentTarget.style.color = accent }}
            onMouseLeave={e => { if (!expanded) { e.currentTarget.style.borderColor = '#1e1e2e'; e.currentTarget.style.color = '#6b6b80' } }}
          >
            {expanded ? (
              <><span>↑ Show less</span></>
            ) : (
              <><span>+ {hiddenCount} more</span></>
            )}
          </button>
        )}
      </div>

      {/* Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', gap: '1rem' }}>
        {/* Always show featured */}
        <Card
          item={featured}
          accent={accent}
          onOpen={() => onOpenLightbox(itemsWithAccent, 0)}
          delay={rowDelay + 80}
        />

        {/* Show rest only when expanded */}
        {expanded && rest.map((item, i) => (
          <Card
            key={item.img}
            item={item}
            accent={accent}
            onOpen={() => onOpenLightbox(itemsWithAccent, i + 1)}
            delay={i * 60}
          />
        ))}
      </div>

      {/* Collapsed hint — small strip showing how many are hidden */}
      {!expanded && hiddenCount > 0 && (
        <div
          onClick={() => setExpanded(true)}
          style={{ marginTop: '.8rem', display: 'flex', alignItems: 'center', gap: '.8rem', cursor: 'pointer', padding: '.65rem 1rem', background: `${accent}06`, border: `1px dashed ${accent}25`, borderRadius: 4, transition: 'background .2s' }}
          onMouseEnter={e => { e.currentTarget.style.background = `${accent}10` }}
          onMouseLeave={e => { e.currentTarget.style.background = `${accent}06` }}
        >
          {/* Mini thumbnails */}
          <div style={{ display: 'flex', gap: 4 }}>
            {rest.slice(0, 3).map(item => (
              <div key={item.img} style={{ width: 36, height: 28, overflow: 'hidden', borderRadius: 2, border: `1px solid ${accent}30`, flexShrink: 0 }}>
                <img src={item.img} alt="" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', opacity: .65 }} />
              </div>
            ))}
          </div>
          <span style={{ fontSize: '.76rem', color: accent, fontFamily: 'Syne,sans-serif', fontWeight: 600 }}>
            + {hiddenCount} more {label.toLowerCase()} — click to expand
          </span>
          <span style={{ marginLeft: 'auto', fontSize: '.8rem', color: accent }}>↓</span>
        </div>
      )}
    </div>
  )
}

// ── Stats Row ─────────────────────────────────────────────────────────
function StatsRow() {
  const [ref, vis] = useInView()
  return (
    <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem', marginBottom: '3rem', marginTop: '-1rem' }}>
      {STATS.map((s, i) => (
        <div key={i} style={{ background: '#12121c', border: '1px solid #1e1e2e', borderTop: `2px solid ${s.accent}`, padding: '1rem 1.2rem', textAlign: 'center', borderRadius: 4, opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(16px)', transition: `opacity .5s ${i * 80}ms, transform .5s ${i * 80}ms` }}>
          <div style={{ fontFamily: 'Syne,sans-serif', fontWeight: 800, fontSize: '1.9rem', color: s.accent, lineHeight: 1, marginBottom: 4 }}>{s.num}</div>
          <div style={{ fontSize: '.68rem', color: '#6b6b80', textTransform: 'uppercase', letterSpacing: '.06em', lineHeight: 1.4 }}>{s.label}</div>
        </div>
      ))}
    </div>
  )
}

// ── Main ──────────────────────────────────────────────────────────────
export default function CertGallery() {
  const [lightbox, setLightbox] = useState(null) // { items, idx }

  return (
    <section style={{ padding: '5rem 2.5rem', background: '#080810' }}>
      <SectionHeader num="06" title="Achievements & Certifications" />

      <StatsRow />

      {Object.entries(CERTS).map(([key, cat], i) => (
        <CategoryRow
          key={key}
          catKey={key}
          cat={cat}
          rowDelay={i * 100}
          onOpenLightbox={(items, idx) => setLightbox({ items, idx })}
        />
      ))}

      {lightbox && (
        <Lightbox
          items={lightbox.items}
          startIdx={lightbox.idx}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  )
}
