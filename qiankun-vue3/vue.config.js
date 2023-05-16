const packageName = require('./package.json').name
module.exports = {
  lintOnSave: false,
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    port: 9090,
  },
  configureWebpack: {
    output: {
      library: `${packageName}-[name]`,
      libraryTarget: 'umd',
    },
  },
}
