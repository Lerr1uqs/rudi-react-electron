import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

import HtmlWebpackPlugin from "html-webpack-plugin"
import NodePolyfillPlugin from "node-polyfill-webpack-plugin"



export const mainConfig: Configuration = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/index.ts',
  // Put your normal webpack config below here
  module: {
    rules,
  },
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
  plugins: [
    new NodePolyfillPlugin(),
    new HtmlWebpackPlugin({
        template: "./src/index.html",
    }),
    ],
};
