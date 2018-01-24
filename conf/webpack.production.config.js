import webpack from 'webpack';
import Config from 'webpack-config';

export default new Config().extend('conf/webpack.base.config.js').merge({
  output: {
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  /*module: {
    loaders: [
	{
        test: /\.less$/,
        loader: 'style-loader!css-loader!autoprefixer-loader!less'
    }
	]
  },*/
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: true
      }
    }),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),]
});