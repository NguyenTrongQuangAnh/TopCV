import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff1f2',
          100: '#ffd9dc',
          200: '#ffb3b9',
          300: '#ff7a84',
          400: '#ff3b49',
          500: '#f41822',
          600: '#da121d',
          700: '#b11920',
          800: '#8e1419',
          900: '#6c1014',
        },
        ink: '#10261d',
        mist: '#f4f7f5',
        sand: '#f8fbf9',
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      boxShadow: {
        soft: '0 20px 60px rgba(9, 34, 24, 0.08)',
        card: '0 14px 40px rgba(18, 55, 35, 0.08)',
      },
      backgroundImage: {
        'hero-grid': 'radial-gradient(circle at top left, rgba(255,255,255,0.5), transparent 30%), linear-gradient(135deg, rgba(244,24,34,0.13), rgba(177,25,32,0.06))',
      },
    },
  },
  plugins: [],
}

export default config
