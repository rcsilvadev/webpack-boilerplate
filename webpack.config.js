/*
  The path module provides utilities for working with file and directory paths
  Reference: https://nodejs.org/api/path.html
*/
const path = require('path');

/*
  Webpack config options
  Reference: https://webpack.js.org/configuration/
*/
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist/assets"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/assets/'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: [
        path.resolve(__dirname, "node_modules")
      ],
      use: {
        loader: "babel-loader",
        options: {
          presets: [
            '@babel/preset-env', // Babel preset-env - reference: https://babeljs.io/docs/en/babel-preset-env
          ]
        }
      }
    }]
  }
}