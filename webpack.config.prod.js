import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5Hash from 'webpack-md5-hash';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
/*eslint-disable no-console */
console.log('webpackconfig.prod');
export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: {
    vendor: path.resolve(__dirname, 'src/index'),
    main: path.resolve(__dirname, 'src/index')
  },
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  plugins: [
      //Generate an exteranal css file with a hash in hte filename
      new ExtractTextPlugin('[name].[contenthash].css'),
      //Cash busting
      new WebpackMd5Hash(),
      // to separate bundle
      new webpack.optimize.CommonsChunkPlugin({
        name: 'vendor'
      }),
      //Create HTML file that includs reference to bundled JS
      new HtmlWebpackPlugin({
              template: 'src/index.html',
              inject: true
      }),
     // Eliminate duplicate packages when generating bundle
     new webpack.optimize.DedupePlugin(),
    //Minify JS
     new webpack.optimize.UglifyJsPlugin()

    ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ExtractTextPlugin.extract('css?sourceMap')}
    ]
  }
}
