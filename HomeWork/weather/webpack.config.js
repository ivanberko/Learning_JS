const path = require('path');
const webpackMerge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const WebpackBar = require('webpackbar');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const loadModeConfig = (env) =>
  require(`./build-utils/${env.mode}.config`)(env);

module.exports = (env) =>
  webpackMerge(
    {
      mode: env.mode,
      context: path.resolve(__dirname, 'src'),
      entry: './index.js',
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js',
      },
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'babel-loader',
          },
          {
            test: /\.(png|jpe?g|gif)$/i,
            loader: 'file-loader?name=/images/[name].[ext]',
            options: {
              outputPath: 'images',
              publicPath: 'assets',
            },
          },
          {
            test: /\.hbs$/,
            use: 'handlebars-loader',
          },
          {
            test: /\.html$/,
            use: 'html-loader',
          },
        ],
      },
      plugins: [
        new CleanWebpackPlugin(),
        new FriendlyErrorsWebpackPlugin(),
        new WebpackBar(),
        new CopyWebpackPlugin([
          {
            from: 'images',
            to: 'images',
            context: path.join(__dirname, 'src'),
          },
        ]),
      ],
    },
    loadModeConfig(env),
  );
