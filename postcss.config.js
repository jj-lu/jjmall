module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport":{
      viewportHeight: 667,
      viewportWidth: 375,
      unitPrecision: 5,
      viewportUnit: 'vw',
      selectorBlackList: ['ignore','tab-bar','tab-bar-item'],
      minPixelValue: 1,
      mediaQuery: false
    }
  }
}
