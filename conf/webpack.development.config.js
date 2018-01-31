import webpack from 'webpack';
import Config from 'webpack-config';

export default new Config().extend('conf/webpack.base.config.js').merge({
  entry: [
    'webpack-hot-middleware/client?reload=true',
    'react-hot-loader/patch',
    __dirname + '/../src/main.js'
  ],
  devtool: 'inline-source-map',
  output: {
    publicPath:'',
    filename: 'bundle.js'
  },
  // module: {
  //   rules: [
  //     {
  //     test: /\.(less|css)$/,
  //     use: [
  //       'style-loader',
  //       { loader: 'css-loader', options: { importLoaders: 1, minimize: true } },
  //       'less-loader',
  //     ],
  //     exclude: [/node_modules/, /public/]
  //   }
  // ]
  // },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});