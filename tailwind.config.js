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
      },
      minWidth: {
        32: '128px',
        1500: '1500px',
        72: '288px'
      },
      height: {
        22:'5.5rem'
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
