module.exports = {
  entry: {
    app: './app/client.js'
  },

  output: {
    filename: '[name].js',
    publicPath: '/assets/',
    path: './public/assets/'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel']
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css']
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  }
};
