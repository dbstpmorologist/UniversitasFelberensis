/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#F7F5F0',
        paper: '#FBFAF6',
        'paper-warm': '#F4F1EA',
        anthracite: '#2A2A28',
        'anthracite-soft': '#3D3D3A',
        'olive-dark': '#4A4D3C',
        'olive-mid': '#6B6F5A',
        sage: '#B5BBA8',
        'sage-light': '#C8CDBE',
        'sage-pale': '#E0E3D7',
        'rose-dusty': '#C9A89F',
        'rose-pale': '#E8D9D4',
        brass: '#B89B4E',
        'brass-light': '#D4BE7A',
        'brass-pale': '#EDE4C7',
        line: '#D8D4CC',
        'line-soft': '#E8E5DE',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        wide2: '0.08em',
        wide3: '0.12em',
        wide4: '0.18em',
      },
    },
  },
  plugins: [],
};
