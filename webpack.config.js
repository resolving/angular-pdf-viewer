const HtmlWebpackPlugin = require('html-webpack-plugin')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './dev/dev-app.js',
  output: {
    clean: true,
  },
  devServer: {
    client: {
      logging: 'verbose',
      overlay: true,
      progress: true
    },
    devMiddleware: {
      writeToDisk: true
    },
    hot: true,
    static: ['dev', 'dist'],
  },
  plugins: [
    new HtmlWebpackPlugin({ 
      template: './dev/index.html',
      inject: 'body',
      defer: 'blocking'
    }),
    new NodePolyfillPlugin()
  ]
}
