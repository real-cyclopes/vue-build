// var webpack = require('webpack')
var projectRoot = process.cwd()

module.exports = {
  context: process.cwd() + '/src',
  // Main file entry point
  entry: {
    app: ['./app.js']
  },
  output: {
    path: process.cwd() + '/dist',
    filename: '[name].js',
    publicPath: './src'
  },
  // resolveLoader: {
  //   fallback: [process.cwd() + '/node_modules']
  // },
  // resolve: {
  //   extensions: ['', '.js', '.jsx'],
  //   modules: [
  //     process.cwd() + '/src',
  //     process.cwd() + '/node_modules'
  //   ]
  // },
  module: {
    // preLoaders: [
    //   {
    //     test: /\.vue$/,
    //     loader: 'eslint',
    //     include: projectRoot,
    //     exclude: /node_modules/
    //   },
    //   {
    //     test: /\.js$/,
    //     loader: 'eslint',
    //     include: projectRoot,
    //     exclude: /node_modules/
    //   }
    // ],
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue',
        options: {
          postcss: [
            require('autoprefixer')({
              browsers: ['last 3 versions']
            })
          ]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel',
        include: projectRoot,
        exclude: /node_modules/,
        query: {
          presets: [['es2015', {'modules': false}], 'stage-2']
        }
      },
      {
        test: /\.(scss|css)$/,
        loaders: ['style', 'css?sourceMap', 'sass?sourceMap']
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
      // {
      //   test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      //   loader: 'url',
      //   query: {
      //     limit: 10000,
      //     name: utils.assetsPath('img/[name].[hash:7].[ext]')
      //   }
      // }
      // {
      //   test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      //   loader: 'url',
      //   query: {
      //     limit: 10000,
      //     name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
      //   }
      // },

    ]
  }
}