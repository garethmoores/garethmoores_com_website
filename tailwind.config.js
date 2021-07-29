module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'nice-orange': '#f7a046',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
