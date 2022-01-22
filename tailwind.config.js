module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'img': '25% auto',
      },
      gridRow: {
        '1\/5': '1/5',
      },
      width: {
        '46':'46.1%'
      },
      zIndex: {
        '1-':'-1',
        '2-':'-2',
        '3-':'-3'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
