const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const PUBLIC_PATH = './static/';

module.exports = {
  entry: './src/index.js',

  output: {
    filename: `${PUBLIC_PATH}bundle.js`,
    path: path.resolve(__dirname, '../dist'),
    publicPath: PUBLIC_PATH,
  },

  devtool: 'source-map',

  module: {
    rules: [
      {
        test: /\.js?$/,
        use: [
          'babel-loader',
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              publicPath: PUBLIC_PATH,
              outputPath: PUBLIC_PATH,
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },

  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      comments: false,
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: false,
    }),
    new ExtractTextPlugin(`${PUBLIC_PATH}style.css`),
  ],
};
