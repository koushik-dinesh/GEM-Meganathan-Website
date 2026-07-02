/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B1D36',
          light: '#132D4F',
        },
        'slate-muted': '#64748B',
        'slate-light': '#94A3B8',
        accent: {
          DEFAULT: '#5B9FD4',
          soft: '#E8F2FA',
        },
        surface: '#F8FAFC',
        border: '#E2E8F0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
