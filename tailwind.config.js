module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      fontFamily: {
        heading: ['var(--font-heading)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      colors: {
        linyr: {
          blue: '#1E40FF',
          charcoal: '#111827',
          offWhite: '#F9FAFB',
          gold: '#F5C542',
          slate: '#1F2937',
          sky: '#A5B4FC',
        },
        primary: {
          100: '#E6F6FE',
          200: '#C0EAFC',
          300: '#9ADDFB',
          400: '#4FC3F7',
          500: '#03A9F4',
          600: '#0398DC',
          700: '#026592',
          800: '#014C6E',
          900: '#013349',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
      boxShadow: {
        glass: '0 20px 45px rgba(17, 24, 39, 0.25)',
        glow: '0 0 30px rgba(30, 64, 255, 0.35)',
      },
      backdropBlur: {
        xs: '2px',
      },
      backgroundImage: {
        'linyr-hero':
          'radial-gradient(circle at top left, rgba(30, 64, 255, 0.18), transparent 55%), radial-gradient(circle at bottom right, rgba(245, 197, 66, 0.22), transparent 60%)',
      },
    },
  },
  plugins: [],
};
