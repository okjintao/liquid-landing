/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cyan: {
          300: '#00ffff',
          400: '#00e6e6',
        },
        gray: {
          300: '#fdfcfb',
        },
      },
      spacing: {
        '52': '13rem',
        '64': '16rem',
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'oscillate': 'oscillate 10s ease-in-out infinite',
      },
      keyframes: {
        oscillate: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(4deg)' },
          '75%': { transform: 'rotate(-4deg)' },
        },
      },
      letterSpacing: {
        'tight': '-0.025em',
      },
      lineHeight: {
        'relaxed': '1.75',
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
} 