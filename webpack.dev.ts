import path from 'path';
import webpack from 'webpack';
import { merge } from 'webpack-merge';
import common from './webpack.common';
import 'webpack-dev-server';

const config: webpack.Configuration = merge(common, {
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'src'),
    historyApiFallback: true,
  },
});

export default config;
