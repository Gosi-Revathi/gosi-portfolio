import { useCountUp } from '../hooks'

export default function CountUp({ val, dec = 0, prefix = '', suffix = '' }) {
  const [ref, cur] = useCountUp(val, dec)
  return (
    <span ref={ref}>
      {prefix}{dec > 0 ? cur.toFixed(dec) : Math.ceil(cur)}{suffix}
    </span>
  )
}
