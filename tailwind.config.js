/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '104px',
        padding: {
          DEFAULT: '12px',
          lg: '1.5rem',
          '2xl': '104px',
        },
      },

      colors: {
        primary: '#C81E1E',
      },
    },
  },
  plugins: [],
};
