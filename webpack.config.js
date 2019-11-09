const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './app/main.js',
  output: {
    path: __dirname + '/dist',
    filename: 'main_bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html'
    })
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};
