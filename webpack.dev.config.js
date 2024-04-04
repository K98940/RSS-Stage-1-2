const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'DEVELOPMENT',
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    static: path.resolve(__dirname, './dist'),
  },
};
