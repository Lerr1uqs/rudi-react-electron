import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';
import HtmlWebpackPlugin from "html-webpack-plugin"
import NodePolyfillPlugin from "node-polyfill-webpack-plugin"

rules.push({
  test: /\.css$/,
  use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
});

export const rendererConfig: Configuration = {
  entry: './src/root.tsx',
  module: {
    rules,
  },
  plugins: [
    new NodePolyfillPlugin(),
    new HtmlWebpackPlugin({
        template: "./src/index.html",
    }),
    ],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
  },
};
