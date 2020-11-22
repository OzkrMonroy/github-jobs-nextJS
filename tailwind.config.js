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
        'work-img': "url(/workWhite.svg)",
        'world-img': "url(/world.svg)"
      }),
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
      textColor: {
        font: {
          placeholder: "#B9BDCF",
          second: " #334680"
        }
      },
      backgroundColor: theme => ({
        'primary': '#1E86FF',
      })
    },
  },
  variants: {},
  plugins: [],
}
