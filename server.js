// var MongoClient = require('mongodb').MongoClient;

// var uri = "mongodb+srv://vadim_dom:qwerty1_@cluster0-vkgt5.mongodb.net/test";
// MongoClient.connect(uri, function(err, db) {
//   // Paste the following examples here
  
//   db.close();
// });


const express = require('express');
const path = require('path');

const PORT = 3000;
const PUBLIC_PATH = __dirname + '/public/build';

const app = express();
const isDevelopment = process.env.NODE_ENV === 'development';

if (isDevelopment) {
  const webpack = require('webpack');
  const webpackConfig = require('./webpack.config.babel').default;
  const compiler = webpack(webpackConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    hot: true,
    stats: {
      colors: true
    }
  }));
  app.use(require('webpack-hot-middleware')(compiler));
} else {
  app.use(express.static(PUBLIC_PATH));
}

app.all("*", function(req, res) {
  res.sendFile(path.resolve(PUBLIC_PATH, 'index.html'));
});

app.listen(PORT, function() {
  console.log('Listening on port ' + PORT + '...');
});