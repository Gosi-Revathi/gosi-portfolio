import { useState } from 'react'
import { useReveal } from '../hooks'
import SectionHeader from './SectionHeader'

// ── Replace with your real Formspree endpoint after signing up at formspree.io ──
// 1. Go to https://formspree.io  → New Form → copy the endpoint ID
// 2. Replace YOUR_FORM_ID below with it (e.g. "xpzvgkdo")
const FORMSPREE_ID = 'xpqylvrr'

const LINKS = [
  { icon: '✉️', label: 'gosirevathi2002@gmail.com', href: 'mailto:gosirevathi2002@gmail.com' },
  { icon: '📱', label: '+91 8073161524',             href: 'tel:+918073161524' },
  { icon: '🐙', label: 'github.com/Gosi-Revathi',    href: 'https://github.com/Gosi-Revathi' },
  { icon: '💼', label: 'LinkedIn Profile',           href: 'https://linkedin.com/in/gosi-revathi-838580351' },
]

function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputStyle = {
    width: '100%', background: '#0a0a14', border: '1px solid #1e1e2e',
    color: '#e8e8f0', padding: '.75rem 1rem', fontSize: '.88rem',
    fontFamily: 'DM Mono, monospace', outline: 'none', borderRadius: 0,
    transition: 'border-color .2s',
  }
  const focusStyle = { borderColor: '#00e5ff' }

  if (status === 'success') return (
    <div style={{ background: 'rgba(16,185,129,.07)', border: '1px solid rgba(16,185,129,.25)', borderLeft: '3px solid #10b981', padding: '2rem', textAlign: 'center' }}>
      <div style={{ fontSize: '2rem', marginBottom: '.8rem' }}>✅</div>
      <div className="font-syne font-bold" style={{ fontSize: '1.1rem', marginBottom: '.5rem' }}>Message sent!</div>
      <div style={{ fontSize: '.84rem', color: '#6b6b80' }}>Thanks for reaching out. I will get back to you within 24 hours.</div>
      <button onClick={() => setStatus('idle')} style={{ marginTop: '1.2rem', background: 'transparent', border: '1px solid #1e1e2e', color: '#6b6b80', padding: '.5rem 1.2rem', cursor: 'pointer', fontSize: '.8rem', fontFamily: 'Syne, sans-serif' }}>
        Send another
      </button>
    </div>
  )

  return (
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '.8rem', marginBottom: '.8rem' }}>
        <div>
          <label style={{ fontSize: '.72rem', color: '#6b6b80', letterSpacing: '.06em', textTransform: 'uppercase', display: 'block', marginBottom: '.4rem' }}>Name *</label>
          <input
            name="name" required value={form.name} onChange={handleChange}
            placeholder="Your name"
            style={inputStyle}
            onFocus={e => Object.assign(e.target.style, focusStyle)}
            onBlur={e => { e.target.style.borderColor = '#1e1e2e' }}
          />
        </div>
        <div>
          <label style={{ fontSize: '.72rem', color: '#6b6b80', letterSpacing: '.06em', textTransform: 'uppercase', display: 'block', marginBottom: '.4rem' }}>Email *</label>
          <input
            name="email" type="email" required value={form.email} onChange={handleChange}
            placeholder="your@email.com"
            style={inputStyle}
            onFocus={e => Object.assign(e.target.style, focusStyle)}
            onBlur={e => { e.target.style.borderColor = '#1e1e2e' }}
          />
        </div>
      </div>

      <div style={{ marginBottom: '.8rem' }}>
        <label style={{ fontSize: '.72rem', color: '#6b6b80', letterSpacing: '.06em', textTransform: 'uppercase', display: 'block', marginBottom: '.4rem' }}>Subject</label>
        <input
          name="subject" value={form.subject} onChange={handleChange}
          placeholder="Job opportunity / Collaboration / General"
          style={inputStyle}
          onFocus={e => Object.assign(e.target.style, focusStyle)}
          onBlur={e => { e.target.style.borderColor = '#1e1e2e' }}
        />
      </div>

      <div style={{ marginBottom: '1.2rem' }}>
        <label style={{ fontSize: '.72rem', color: '#6b6b80', letterSpacing: '.06em', textTransform: 'uppercase', display: 'block', marginBottom: '.4rem' }}>Message *</label>
        <textarea
          name="message" required value={form.message} onChange={handleChange}
          placeholder="Tell me about the opportunity or what you have in mind..."
          rows={5}
          style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
          onFocus={e => Object.assign(e.target.style, focusStyle)}
          onBlur={e => { e.target.style.borderColor = '#1e1e2e' }}
        />
      </div>

      {status === 'error' && (
        <div style={{ background: 'rgba(239,68,68,.07)', border: '1px solid rgba(239,68,68,.2)', color: '#f87171', padding: '.7rem 1rem', fontSize: '.8rem', marginBottom: '1rem' }}>
          Something went wrong. Please try emailing directly at gosirevathi2002@gmail.com
        </div>
      )}

      <button type="submit" disabled={status === 'sending'}
        style={{ background: status === 'sending' ? '#444' : '#00e5ff', color: '#000', padding: '.85rem 2.2rem', fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '.9rem', letterSpacing: '.05em', border: 'none', cursor: status === 'sending' ? 'not-allowed' : 'pointer', transition: 'opacity .2s', opacity: status === 'sending' ? .7 : 1 }}>
        {status === 'sending' ? 'Sending...' : 'Send Message →'}
      </button>
    </form>
  )
}

export default function Contact() {
  const ref = useReveal()
  return (
    <section id="contact" style={{ padding: '5rem 2.5rem', background: '#0d0d18' }}>
      <SectionHeader num="10" title="Let's Connect" />

      {/* "What I'm looking for" banner */}
      <div style={{ background: 'rgba(0,229,255,.05)', border: '1px solid rgba(0,229,255,.15)', borderLeft: '3px solid #00e5ff', padding: '1rem 1.4rem', marginBottom: '3rem', marginTop: '-1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '1.2rem' }}>🎯</span>
        <div>
          <div style={{ fontSize: '.78rem', color: '#00e5ff', letterSpacing: '.08em', textTransform: 'uppercase', marginBottom: '.2rem' }}>Open to work</div>
          <div style={{ fontSize: '.9rem', color: 'rgba(232,232,240,.8)', lineHeight: 1.6 }}>
            <strong style={{ color: '#e8e8f0' }}>9 months of production experience</strong> in Node.js, Docker & AWS —
actively seeking full-time <strong style={{ color: '#00e5ff' }}>Backend / DevOps</strong> roles in Bengaluru or remote.
Available to join immediately.
          </div>
        </div>
      </div>

      <div ref={ref} style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '3rem', alignItems: 'start' }}>
        {/* Left — links + photo */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', inset: -3, borderRadius: '50%', background: 'linear-gradient(135deg,#00e5ff,#7c3aed)' }} />
              <div style={{ position: 'absolute', inset: -1, borderRadius: '50%', background: '#0d0d18' }} />
              <img src="/profile.jpg" alt="Gosi Revathi" style={{ width: 60, height: 60, borderRadius: '50%', objectFit: 'cover', objectPosition: 'center top', display: 'block', position: 'relative', zIndex: 2 }} />
            </div>
            <div>
              <div className="font-syne font-bold" style={{ fontSize: '1rem' }}>Gosi Revathi</div>
              <div style={{ fontSize: '.78rem', color: '#6b6b80', fontStyle: 'italic' }}>Backend & DevOps Engineer</div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '.6rem', marginBottom: '1.8rem' }}>
            {LINKS.map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="contact-link">
                <span style={{ fontSize: '1rem' }}>{l.icon}</span>{l.label}
              </a>
            ))}
          </div>

          <div style={{ fontSize: '.78rem', color: '#444460', display: 'flex', alignItems: 'center', gap: '.45rem' }}>
            📍 Bengaluru, India
          </div>
        </div>

        {/* Right — form */}
        <div>
          <div style={{ fontSize: '.78rem', color: '#6b6b80', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Fill the form below — I respond within 24 hours. Or reach me directly via any of the links.
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
