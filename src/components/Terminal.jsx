const LINES = [
  { prompt: true,  cmd: 'cat profile.json' },
  { raw: '{',      col: '#333350' },
  { ind: 1, k: '"name"',       v: '"Gosi Revathi"',      str: true },
  { ind: 1, k: '"role"',       v: '"Backend + DevOps"',  str: true },
  { ind: 1, k: '"cgpa"',       v: '8.71',                num: true },
  { ind: 1, k: '"stack"',      open: true },
  { ind: 2,                    v: '"Node.js", "Docker"',  str: true },
  { ind: 2,                    v: '"AWS", "Kubernetes"',  str: true },
  { ind: 2,                    v: '"PostgreSQL", "CI/CD"',str: true },
  { ind: 1, raw: '],',         col: '#333350' },
  { ind: 1, k: '"perf_boost"', v: '"+32%"',              str: true },
  { ind: 1, k: '"location"',   v: '"Bengaluru, India"',  str: true, last: true },
  { raw: '}',      col: '#333350' },
  { cursor: true },
]

export default function Terminal() {
  return (
    <div className="rounded-[4px] overflow-hidden"
      style={{ background: '#0d0d1a', border: '1px solid #1e1e2e', boxShadow: '0 32px 64px rgba(0,0,0,.55)' }}>

      {/* Title bar */}
      <div className="flex items-center gap-[6px] px-4 py-[10px]"
        style={{ background: '#0a0a14', borderBottom: '1px solid #1e1e2e' }}>
        {['#ff5f57','#febc2e','#28c840'].map(c => (
          <span key={c} className="inline-block w-[11px] h-[11px] rounded-full" style={{ background: c }} />
        ))}
        <span className="mx-auto text-muted tracking-wider" style={{ fontSize: '.68rem' }}>
          gosi@dev ~ profile.json
        </span>
      </div>

      {/* Body */}
      <div className="p-6 font-mono" style={{ fontSize: '.75rem', lineHeight: 2.1 }}>
        {LINES.map((l, i) => (
          <div
            key={i}
            className="flex gap-2"
            style={{ paddingLeft: l.ind === 2 ? '3rem' : l.ind === 1 ? '1.5rem' : 0 }}
          >
            {l.prompt && (
              <>
                <span style={{ color: '#7c3aed' }}>$</span>
                <span style={{ color: '#00e5ff' }}>{l.cmd}</span>
              </>
            )}
            {l.raw && <span style={{ color: l.col || '#e8e8f0' }}>{l.raw}</span>}
            {l.open && (
              <>
                <span style={{ color: '#f59e0b' }}>{l.k}</span>
                <span style={{ color: '#6b6b80' }}>: </span>
                <span style={{ color: '#333350' }}>[</span>
              </>
            )}
            {l.k && !l.open && (
              <>
                <span style={{ color: '#f59e0b' }}>{l.k}</span>
                <span style={{ color: '#6b6b80' }}>: </span>
                <span style={{ color: l.str ? '#fca5a5' : '#86efac' }}>
                  {l.v}{!l.last ? ',' : ''}
                </span>
              </>
            )}
            {!l.k && !l.raw && !l.prompt && !l.cursor && l.v && (
              <span style={{ color: '#fca5a5' }}>{l.v},</span>
            )}
            {/* ✅ CSS-only blinking cursor */}
            {l.cursor && (
              <>
                <span style={{ color: '#7c3aed' }}>$</span>
                <span className="term-cursor" />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
