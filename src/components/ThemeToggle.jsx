import { useState, useEffect } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const root = document.documentElement

    if (dark) {
      root.setAttribute('data-theme', 'dark')
    } else {
      root.setAttribute('data-theme', 'light')
    }
  }, [dark])

  return (
    <button
      onClick={() => setDark(d => !d)}
      title={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        position: 'fixed', bottom: '5.5rem', right: '2rem', zIndex: 200,
        width: 44, height: 44,
        background: dark ? '#1e1e2e' : '#ffffff',
        border: `1px solid ${dark ? '#333350' : '#e0e0e8'}`,
        borderRadius: '50%',
        cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: '1.2rem',
        transition: 'all .3s',
        boxShadow: dark ? '0 4px 20px rgba(0,0,0,.4)' : '0 4px 20px rgba(0,0,0,.12)',
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.1)' }}
      onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)' }}
    >
      {dark ? '☀️' : '🌙'}
    </button>
  )
}
