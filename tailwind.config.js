/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#000932',
          light: '#0A2866',
        },
        'slate-muted': '#64748B',
        'slate-light': '#94A3B8',
        brand: {
          950: '#000932',
          900: '#0A2866',
          800: '#002E8E',
          700: '#0D4BA8',
          600: '#1A6FD4',
          500: '#0760E1',
          400: '#3D9AF0',
          300: '#6BB8F8',
          soft: '#E8F2FE',
        },
        accent: {
          DEFAULT: '#0760E1',
          dark: '#002E8E',
          light: '#3D9AF0',
          soft: '#E8F2FE',
        },
        surface: '#F8FAFC',
        border: '#E2E8F0',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #000932 0%, #002E8E 42%, #0760E1 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, #0A2866 0%, #1A6FD4 55%, #3D9AF0 100%)',
      },
      boxShadow: {
        brand: '0 4px 20px -4px rgba(7, 96, 225, 0.35)',
      },
    },
  },
  plugins: [],
}
