const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const autoprefixer = require('autoprefixer');

module.exports = {
  entry: `${__dirname}/index.js`,

  output: {
    filename: './app.js',
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css-loader?modules&localIdentName=[hash:base64:6]!postcss-loader'
        ),
      },
    ],
  },

  postcss: [
    autoprefixer({ browsers: ['last 5 versions'] }),
  ],

  plugins: [
    new ExtractTextPlugin('stylesheets/screen.css', { allChunks: true }),
    new webpack.optimize.UglifyJsPlugin({ mangle: true }),
  ],

};
