import CountUp from './CountUp'
import { STATS } from '../data'

export default function StatsStrip() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4"
      style={{ borderTop: '1px solid #1e1e2e', borderBottom: '1px solid #1e1e2e', background: '#0d0d18' }}>
      {STATS.map((s, i) => (
        <div key={i} className="relative text-center py-5 px-4">
          {i < 3 && (
            <div className="absolute right-0 top-[20%] bottom-[20%] w-px hidden md:block" style={{ background: '#1e1e2e' }} />
          )}
          <div className="font-syne font-extrabold text-cyan mb-1" style={{ fontSize: '2.3rem', lineHeight: 1 }}>
            <CountUp val={s.val} dec={s.dec} prefix={s.prefix} suffix={s.suffix} />
          </div>
          <div className="text-muted uppercase tracking-widest" style={{ fontSize: '.66rem' }}>{s.label}</div>
        </div>
      ))}
    </div>
  )
}
