module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: '#3B82F6',
      textNav: '#F3F4F6',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
