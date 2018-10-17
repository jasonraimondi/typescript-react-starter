import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { resolve } from 'path';
import * as webpack from 'webpack';

import postCssConfig from './postcss.config';

const devMode = process.env.NODE_ENV !== 'production';
const projectRoot = resolve(__dirname, '../');

const config: webpack.Configuration|any = {
   mode: devMode ? 'development' : 'production',
   devtool: devMode ? 'cheap-module-eval-source-map' : false,
   context: projectRoot,
   entry: {
      main: './src/main.tsx',
   },
   output: {
      path: projectRoot + '/dist',
      filename: devMode ? '[name].package.js' : '[name].[hash].package.js',
   },
   resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json', '.scss'],
   },
   module: {
      rules: [
         {
            test: /\.tsx?$/,
            exclude: /node_modules/,
            use: ['ts-loader'],
         },
         {
            test: /\.(pcss|css)$/,
            use: [
               devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
               'css-loader',
               {
                  loader: 'postcss-loader',
                  options: {
                     plugins: postCssConfig,
                  },
               },
            ],
         },
         {
            test: /\.(png|jpg|gif|svg)$/,
            use: [
               {
                  loader: 'file-loader',
                  options: {
                     name: '[name].[ext]',
                  },
               },
            ],
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: projectRoot + '/index.html',
      }),
      new MiniCssExtractPlugin({
         filename: '[name].[hash].css',
         chunkFilename: '[id].[hash].css',
      }),
   ],
};

config.devServer = {
   host: '0.0.0.0',
   port: '3333',
   historyApiFallback: true,
   disableHostCheck: true,
};

export default config;
