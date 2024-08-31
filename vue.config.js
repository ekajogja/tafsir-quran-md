const path = require('path')

module.exports = {
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
        .add(/node_modules\/marked/)
        .end()
      .use('babel-loader')
        .loader('babel-loader')
        .tap(options => {
          return options;
        });
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
    compress: true,
    port: 3333,
  }
};