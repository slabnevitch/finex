module.exports = {

  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/assets/scss/variables/index.scss";
        `
      }
    }
  },


  /**
   * для Apache Cordova
   * publicPath: ''
   *
   * для размещения на веб-сервере
   * publicPath: '/'
   */
  // publicPath: '/',

  publicPath: process.env.NODE_ENV === 'production'
    ? '/finex/' //имя проекта на gh-pages
    : '/' //путь для development mode

  // DEV
  // devServer: {
  //
  //   disableHostCheck: true,
  //   port: 80,
  //   host: '0.0.0.0'
  // }
};
