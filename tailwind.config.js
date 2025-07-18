/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#86742f',
        secondary: '#a09050',
        accent: '#d4cdb0',
        background: '#f9f7f1',
        text: '#3a3413',
      },
    },
  },
  plugins: [],
};
