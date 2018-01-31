import webpack from 'webpack';
import Config from 'webpack-config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import autoprefixer from 'autoprefixer';
import precss from 'precss';

export default new Config().merge({
  entry: './src/main.js',
  output: {
        path: __dirname + '/../public/build/',
        publicPath:'',
        filename: "bundle.js"
    },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    //   {
    //     test: /.js?$/,
    //     loader: 'babel-loader',
    //     exclude: /node_modules/,
    //   },
            // {
            //     test: /\.jsx?$/,
            //     loader: "eslint-loader",
            //     exclude: [/node_modules/, /public/]
            // },
            // {
            //     test: /\.css$/,
            //     loader: 'style-loader!css-loader!autoprefixer-loader',
            //     exclude: [/node_modules/, /public/]
            // },
            // {
            //     test: /\.less$/,
            //     // loader: 'style-loader!css-loader!autoprefixer-loader!less-loader',

            //     use: [
            //       'style-loader',
            //       { loader: 'css-loader' },
            //       { loader: 'autoprefixer-loader' },
            //       { loader: 'less-loader' },
            //     ],

            //     exclude: [/node_modules/, /public/]
            // },
            {
                test: /\.(less|css)$/,
                use: [
                  'style-loader',
                  { loader: 'css-loader', options: { importLoaders: 1, minimize: true } },
                  'less-loader',
                ],
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.gif$/,
                loader: 'url-loader?limit=10000&mimetype=image/gif'
            },
            {
                test: /\.jpg$/,
                loader: 'url-loader?limit=10000&mimetype=image/jpg'
            },
            {
                test: /\.png$/,
                loader: 'url-loader?limit=10000&mimetype=image/png'
            },
            {
                test: /\.svg/,
                loader: 'url-loader?limit=26000&mimetype=image/svg+xml'
            },
           
            {
                test: /\.json$/,
                use: 'json-loader'
            }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      inject: "body"
    }),
    new webpack.LoaderOptionsPlugin({ options: { postcss: [precss, autoprefixer] } })
  ]
});