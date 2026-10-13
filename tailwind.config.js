/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 60% Matte Titanium dominant background
        titanium: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0', // dominant background
          300: '#cbd5e1',
          400: '#94a3b8',
        },
        // 30% Anodized Black secondary structure
        anodized: {
          dark: '#080d1a',
          900: '#0f172a', // secondary structure
          800: '#1e293b',
          700: '#334155',
        },
        // 10% Safety Yellow accent action
        safety: {
          yellow: '#f59e0b',
          hover: '#fbbf24',
          dark: '#d97706',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace']
      }
    },
  },
  plugins: [],
}
