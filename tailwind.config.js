/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
        fraunces: ['Fraunces', 'serif'],
      },
      colors: {
        bg:      '#080810',
        surface: '#0d0d18',
        card:    '#12121c',
        cardHov: '#14141f',
        border:  '#1e1e2e',
        cyan:    '#00e5ff',
        violet:  '#7c3aed',
        amber:   '#f59e0b',
        emerald: '#10b981',
        muted:   '#6b6b80',
        dim:     '#444460',
      },
      animation: {
        'term-blink': 'termBlink 1s step-end infinite',
        'dot-pulse':  'dotPulse 1.8s ease-in-out infinite',
        'bg-grid':    'bgGrid 9s linear infinite',
        'glow-pulse': 'glowPulse 5s ease-in-out infinite',
        'fade-up-1':  'fadeUp .65s .05s both',
        'fade-up-2':  'fadeUp .65s .12s both',
        'fade-up-3':  'fadeUp .65s .20s both',
        'fade-up-4':  'fadeUp .65s .28s both',
        'fade-up-5':  'fadeUp .65s .36s both',
        'fade-up-6':  'fadeUp .65s .44s both',
      },
      keyframes: {
        termBlink: { '0%,49%': { opacity: 1 }, '50%,100%': { opacity: 0 } },
        dotPulse:  { '0%,100%': { transform: 'scale(1)', opacity: 1 }, '50%': { transform: 'scale(1.6)', opacity: .4 } },
        bgGrid:    { from: { transform: 'translateY(0)' }, to: { transform: 'translateY(48px)' } },
        glowPulse: { '0%,100%': { opacity: .5 }, '50%': { opacity: .85 } },
        fadeUp:    { from: { opacity: 0, transform: 'translateY(26px)' }, to: { opacity: 1, transform: 'translateY(0)' } },
      },
    },
  },
  plugins: [],
}
