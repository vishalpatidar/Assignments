const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: {
      index: './src/index.js',
      gallery: './src/gallery.js',
      news: './src/news.js',
      contact: './src/contact.js',
      blog: './src/blog.js'
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  target: 'node', // in order to ignore built-in modules like path, fs, etc.
  externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ],
        exclude: /(node_modules)/
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader',
          'eslint-loader'
        ],
        exclude: /(node_modules)/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
              loader: 'file-loader',
              options: {
                name: '[path][name].[ext]'
              }
          }
        ],
        exclude: /(node_modules)/
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ],
        exclude: /(node_modules)/
      },
      {
        test: /\.(html)$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              attrs: ['img:src']
            }
          }
        ],
        exclude: /(node_modules)/
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin('dist'),
    new HtmlWebpackPlugin({
      inject: false,
      filename: 'index.html',
      template: './src/index.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: 'gallery.html',
      template: './src/gallery.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: 'news.html',
      template: './src/news.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: 'blog.html',
      template: './src/blog.html'
    }),
    new HtmlWebpackPlugin({
      inject: false,
      filename: 'contact.html',
      template: './src/contact.html'
    })
  ]
};
