const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  // mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'RSS Puzzle',
      favicon: './src/favicon.webp',
    }),
  ],
};
