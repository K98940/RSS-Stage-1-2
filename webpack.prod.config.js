const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  // mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Async Race',
      favicon: './src/favicon.webp',
    }),
  ],
};
