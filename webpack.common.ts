import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ESLintWebpackPlugin from 'eslint-webpack-plugin';
import StylelintWebpackPlugin from 'stylelint-webpack-plugin';

const config: webpack.Configuration = {
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }),
    new ESLintWebpackPlugin({
      extensions: ['ts', 'tsx'],
      exclude: 'node_modules',
    }),
    new StylelintWebpackPlugin({
      extensions: ['ts', 'tsx', 'css'],
    }),
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].[fullhash].bundle.js',
    publicPath: '/',
    clean: true,
  },
};

export default config;
