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
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #080616 0%, #1e1b2e 50%, #16132a 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(168,85,247,0.1) 0%, rgba(245,158,11,0.05) 100%)',
        'glow-purple': 'radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)',
        'glow-gold': 'radial-gradient(circle, rgba(245,158,11,0.25) 0%, transparent 70%)',
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(168,85,247,0.3)',
        'glow': '0 0 40px rgba(168,85,247,0.4)',
        'glow-gold': '0 0 30px rgba(245,158,11,0.35)',
        'card': '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.05)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
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
      },
    },
  },
  plugins: [],
}
