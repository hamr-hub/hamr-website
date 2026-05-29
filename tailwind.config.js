/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6d28d9',
          900: '#4c1d95',
        },
        gold: {
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        dark: {
          50: '#f8fafc',
          100: '#1e1b2e',
          200: '#16132a',
          300: '#110e24',
          400: '#0d0b1e',
          500: '#080616',
          600: '#050412',
          700: '#03020d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'PingFang SC', 'Noto Sans SC', 'system-ui', 'sans-serif'],
      },
      /* ── 黄金比例间距体系 (1:1.618) ── */
      spacing: {
        'golden-xs': '0.382rem',   /* ~6px  — 微间距 */
        'golden-sm': '0.618rem',   /* ~10px — 小间距 */
        'golden':    '1rem',       /* 16px  — 基准 */
        'golden-md': '1.618rem',   /* ~26px — 中间距 */
        'golden-lg': '2.618rem',   /* ~42px — 大间距 */
        'golden-xl': '4.236rem',   /* ~68px — 特大间距 */
        'golden-2xl': '6.854rem',  /* ~110px — 巨型间距 */
        'golden-3xl': '11.09rem',  /* ~177px — 超级间距 */
      },
      /* ── 黄金比例字号体系 ── */
      fontSize: {
        'display-2xl': ['6rem', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-xl': ['5rem', { lineHeight: '1.08', letterSpacing: '-0.025em', fontWeight: '800' }],
        'display':    ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-sm': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.015em', fontWeight: '700' }],
        'heading':    ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'subheading': ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.005em', fontWeight: '500' }],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #080616 0%, #1e1b2e 50%, #16132a 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(168,85,247,0.1) 0%, rgba(245,158,11,0.05) 100%)',
        'glow-purple': 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)',
        'glow-gold': 'radial-gradient(circle, rgba(245,158,11,0.25) 0%, transparent 70%)',
        'divider-glow': 'linear-gradient(90deg, transparent, rgba(168,85,247,0.3), rgba(245,158,11,0.15), transparent)',
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(168,85,247,0.3)',
        'glow': '0 0 40px rgba(168,85,247,0.4)',
        'glow-lg': '0 0 60px rgba(168,85,247,0.5), 0 0 120px rgba(168,85,247,0.15)',
        'glow-gold': '0 0 30px rgba(245,158,11,0.35)',
        'card': '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
        'card-hover': '0 12px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)',
        'btn-primary': '0 0 30px rgba(168,85,247,0.35), 0 4px 16px rgba(0,0,0,0.3)',
        'btn-primary-hover': '0 0 50px rgba(168,85,247,0.5), 0 8px 24px rgba(0,0,0,0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'scroll-hint': 'scrollHint 2s ease-in-out infinite',
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(168,85,247,0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(168,85,247,0.5)' },
        },
        scrollHint: {
          '0%, 100%': { opacity: '0.3', transform: 'translateY(0)' },
          '50%': { opacity: '1', transform: 'translateY(8px)' },
        },
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(16px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      /* ── 过渡时间体系 ── */
      transitionDuration: {
        '400': '400ms',
        '500': '500ms',
        '600': '600ms',
      },
    },
  },
  plugins: [],
}
