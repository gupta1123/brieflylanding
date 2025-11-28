/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-paper': '#F4F4F0',
        'ink-black': '#111111',
        'accent-orange': '#EB4B2B',
        'tech-slate': '#3D5A80',
        'industrial-yellow': '#F59E0B',
        'pass-green': '#10B981',
        'fail-red': '#EF4444',
      },
      fontFamily: {
        grotesk: ['"Space Grotesk"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        brutal: '8px 8px 0px rgba(0,0,0,1)',
      },
    },
  },
  plugins: [],
};

