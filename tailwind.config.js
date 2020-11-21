module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'search-img': "url(/backgroundImg.png)",
        'work-img': "url(/workWhite.svg)"
      })
    },
    width: {
      '5p': '5%',
      '10p': '10%',
      '25p': '25%',
      '30p': '30%',
      '35p': '35%',
      '40p': '40%',
      '50p': '50%',
      '55p': '55%',
      '60p': '60%',
      '75p': '75%',
      '80p': '80%',
      '85p': '85%',
      '90p': '90%',
      '95p': '95%',
      'full': '100%'
    },
    textColor: theme => ({
      ...theme('colors'),
      font: {
        placeholder: "#B9BDCF"
      }
    }),
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#1E86FF',
    })
  },
  variants: {},
  plugins: [],
}
