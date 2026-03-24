/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{tsx,jsx,html,js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        background: {
          light: '#ffffff',
          dark: '#0a0a0a',
        },
        primary: {
          DEFAULT: '#6366f1', // Indigo
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#ec4899', // Pink
          foreground: '#ffffff',
        },
        accent: {
          DEFAULT: '#8b5cf6', // Violet
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#f3f4f6',
          dark: '#1f2937',
          foreground: '#6b7280',
        },
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          '2xl': '1400px',
        },
      },
    },
  },
  plugins: [],
}

