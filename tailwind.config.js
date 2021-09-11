module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: '#3B82F6',
      textNav: '#F3F4F6',
      white: '#FFFFFF',
      gray100: '#F3F4F6',
      gray500: '#6B7280',
      gray800: '#1F2937',
      yellow200: '#FDE68A',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
