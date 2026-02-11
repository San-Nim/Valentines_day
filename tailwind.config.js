/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./pages/**/*.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        'night-dark': '#0F0A1F',
        'night-mid': '#1A0B2E',
        'night-light': '#2D1B4E',
        'romantic-pink': '#FF6B9D',
        'romantic-red': '#FF1744',
        'romantic-rose': '#FF9ECD',
        'star-yellow': '#FFD93D',
        'fire-orange': '#FF6B35',
        'fire-yellow': '#FFD93D',
        'fire-white': '#FFF5E1',
        'charcoal': '#2D2D2A',
        'stone-light': '#F9F9F7',
      },
      animation: {
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'heart-beat': 'heart-beat-pulse 1.5s ease-in-out infinite',
        'float': 'float-heart 3s ease-in-out infinite',
        'flicker': 'flicker 1.5s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        'heart-beat-pulse': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
        },
        'float-heart': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        flicker: {
          '0%, 100%': { transform: 'scaleY(1) scaleX(1)', opacity: '1' },
          '25%': { transform: 'scaleY(1.1) scaleX(0.95)', opacity: '0.9' },
          '50%': { transform: 'scaleY(0.95) scaleX(1.05)', opacity: '1' },
          '75%': { transform: 'scaleY(1.05) scaleX(0.98)', opacity: '0.95' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}