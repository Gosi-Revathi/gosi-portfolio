import { useState } from 'react'
import { useReveal } from '../hooks'
import { PUB_KEYWORDS } from '../data'
import SectionHeader from './SectionHeader'

const PDF_URL = '/AI_Mental_Health_Research_Paper.pdf'

export default function Publication() {
  const ref = useReveal()
  const [pdfOpen, setPdfOpen] = useState(false)

  return (
    <section style={{ padding: '5rem 2.5rem', background: '#0d0d18' }}>
      <SectionHeader num="04" title="Publication" />

      <div ref={ref} style={{ background: '#12121c', border: '1px solid #1e1e2e', borderLeft: '3px solid #7c3aed', position: 'relative', overflow: 'hidden' }}>

        {/* Corner glow */}
        <div style={{ position: 'absolute', top: 0, right: 0, width: 220, height: 220, background: 'radial-gradient(circle at top right,rgba(124,58,237,.1),transparent 70%)', pointerEvents: 'none' }} />

        {/* Header */}
        <div style={{ padding: '1.8rem 2.2rem 1.5rem', borderBottom: '1px solid #1a1a2e', position: 'relative' }}>
          <div style={{ fontSize: '.64rem', color: '#7c3aed', letterSpacing: '.13em', textTransform: 'uppercase', marginBottom: '.6rem' }}>
            📄 National Conference — ERGMET 2024 · Sep 26–27, 2024
          </div>
          <div className="font-fraunces" style={{ fontSize: '1.5rem', fontWeight: 300, lineHeight: 1.25, marginBottom: '.45rem' }}>
            AI in Mental Health Care Research
          </div>
          <div style={{ fontSize: '.72rem', color: '#6b6b80', fontStyle: 'italic', marginBottom: '1rem', lineHeight: 1.6 }}>
            "Exploration and Adaptation of Emerging AI Technologies in Business"<br />
            Nagarjuna Degree College, Yelahanka, Bengaluru · ICMRD & NIPM-KC (Karnataka Chapter)
          </div>

          {/* Keywords */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: '1.2rem' }}>
            {PUB_KEYWORDS.map(k => (
              <span key={k} style={{ background: 'rgba(124,58,237,.09)', border: '1px solid rgba(124,58,237,.22)', color: '#a78bfa', padding: '.18rem .6rem', fontSize: '.65rem', letterSpacing: '.03em' }}>
                {k}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <button
              onClick={() => setPdfOpen(v => !v)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '.5rem',
                background: pdfOpen ? '#7c3aed' : 'rgba(124,58,237,.1)',
                border: '1px solid rgba(124,58,237,.4)',
                color: pdfOpen ? '#fff' : '#a78bfa',
                padding: '.6rem 1.2rem', fontSize: '.76rem', letterSpacing: '.04em',
                cursor: 'pointer', transition: 'all .2s',
              }}
            >
              {pdfOpen ? '▲ Hide Paper' : '▼ Read Paper'}
            </button>

            <a
              href={PDF_URL}
              download="Gosi_Revathi_AI_Mental_Health_Research.pdf"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '.5rem',
                background: 'transparent',
                border: '1px solid rgba(0,229,255,.3)',
                color: '#00e5ff',
                padding: '.6rem 1.2rem', fontSize: '.76rem', letterSpacing: '.04em',
                textDecoration: 'none', transition: 'all .2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,229,255,.08)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              ↓ Download PDF
            </a>
          </div>
        </div>

        {/* Abstract snippet (always visible) */}
        <div style={{ padding: '1.4rem 2.2rem', borderBottom: pdfOpen ? '1px solid #1a1a2e' : 'none' }}>
          <div style={{ fontSize: '.64rem', color: '#6b6b80', letterSpacing: '.1em', textTransform: 'uppercase', marginBottom: '.6rem' }}>Abstract</div>
          <p style={{ fontSize: '.77rem', lineHeight: 1.85, color: 'rgba(232,232,240,.62)' }}>
            Artificial Intelligence is increasingly recognised as a tool that can revolutionise mental healthcare
            by assisting clinicians in diagnosing, treating, and monitoring psychiatric disorders. This paper
            explores AI's role in mental healthcare, reviewing current research on diagnostic and therapeutic
            applications, key challenges, and the emerging concept of <em style={{ color: '#a78bfa' }}>artificial wisdom</em> — enabling AI to
            make ethically and contextually appropriate decisions in clinical settings.
          </p>
        </div>

        {/* Inline PDF viewer — expands on button click */}
        {pdfOpen && (
          <div style={{ padding: '0 2.2rem 2rem' }}>
            <div style={{ marginTop: '1.2rem', border: '1px solid rgba(124,58,237,.25)', overflow: 'hidden', background: '#0a0a14' }}>
              {/* PDF toolbar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '.6rem 1rem', background: '#0e0e18', borderBottom: '1px solid #1a1a2e' }}>
                <span style={{ fontSize: '.68rem', color: '#6b6b80' }}>AI_Mental_Health_Research_Paper.pdf · 9 pages</span>
                <a
                  href={PDF_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '.68rem', color: '#7c3aed', textDecoration: 'none', letterSpacing: '.04em' }}
                >
                  Open in new tab ↗
                </a>
              </div>

              {/* Embedded PDF */}
              <iframe
                src={`${PDF_URL}#toolbar=0&navpanes=0&scrollbar=1`}
                title="AI in Mental Health Care — Research Paper"
                width="100%"
                style={{ height: '70vh', minHeight: 480, border: 'none', display: 'block' }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
