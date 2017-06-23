var webpack = require('webpack');
var path = require('path')

module.exports = {
  entry: path.resolve(__dirname,'app.js'),
  output: {
    path: path.resolve(__dirname),
    filename: 'index.js'
  },
  module: {
    rules: [
      {test: /\.js$/, use: 'babel-loader'}
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
}
};
