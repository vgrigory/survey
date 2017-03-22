'use strict';

// Modules
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

/**
 * Env
 * Get npm lifecycle event to identify the environment
 */
var ENV = process.env.npm_lifecycle_event;
var isTest = ENV === 'test';

module.exports = function makeWebpackConfig () {
  /**
   * Config
   * Reference: http://webpack.github.io/docs/configuration.html
   * This is the object where all configuration gets set
   */
  var config = {};

  /**
   * Entry
   * Reference: http://webpack.github.io/docs/configuration.html#entry
   * Should be an empty object if it's generating a test build
   * Karma will set this when it's a test build
   */
  config.entry = isTest ? {} : {
    app: './src/js/app.js'
  };

  /**
   * Output
   * Reference: http://webpack.github.io/docs/configuration.html#output
   * Should be an empty object if it's generating a test build
   * Karma will handle setting it up for you when it's a test build
   */

  config.output = isTest ? {} : {
    // Absolute output directory
    path: 'dist',

    // Output path from the view of the page
    // Uses webpack-dev-server in development
    publicPath: '/',

    // Filename for entry points
    // Only adds hash in build mode
    filename: 'scripts/[name].js',

    // Filename for non-entry points
    // Only adds hash in build mode
    chunkFilename: 'scripts/[name].js'
  };

  /**
   * Devtool
   * Reference: http://webpack.github.io/docs/configuration.html#devtool
   * Type of sourcemap to use per build type
   */
  if (isTest) {
    config.devtool = 'inline-source-map';
  } else {
    config.devtool = 'source-map';
  }

  /**
   * Loaders
   * Reference: http://webpack.github.io/docs/configuration.html#module-loaders
   * List: http://webpack.github.io/docs/list-of-loaders.html
   * This handles most of the magic responsible for converting modules
   */

    // Initialize module
  config.module = {
    preLoaders: [],
    loaders: [{
      // JS LOADER
      // Reference: https://github.com/babel/babel-loader
      // Transpile .js files using babel-loader
      // Compiles ES6 and ES7 into ES5 code
      test: /\.js$/,
      loader: 'babel!eslint',
      exclude: /node_modules.*/
    }, {
      // CSS LOADER
      // Reference: https://github.com/webpack/css-loader
      // Allow loading css through js
      //
      // Reference: https://github.com/postcss/postcss-loader
      // Postprocess your css with PostCSS plugins
      test: /\.css$/,
      // Reference: https://github.com/webpack/extract-text-webpack-plugin
      // Extract css files in production builds
      //
      // Reference: https://github.com/webpack/style-loader
      // Use style-loader in development.
      loader: isTest ? 'null' : ExtractTextPlugin.extract('style', 'css')
    }, {
      test: /\.scss$/,
      loader: isTest ? 'null' : ExtractTextPlugin.extract('style', 'css!sass')
    }, {
      // ASSET LOADER
      // Reference: https://github.com/webpack/file-loader
      // Copy png, jpg, jpeg, gif, svg, woff, woff2, ttf, eot files to output
      // Rename the file using the asset hash
      // Pass along the updated reference to your code
      // You can add here any file extension you want to get copied to your output
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'file?name=resources/[name].[ext]'
    }, {
        test: /\.html$/,
        exclude: /index\.html/,
        loader: 'ngtemplate!html'
    }
    ]
  };


  // ISPARTA LOADER
  // Reference: https://github.com/ColCh/isparta-instrumenter-loader
  // Instrument JS files with Isparta for subsequent code coverage reporting
  // Skips node_modules and files that end with .test.js
//   if (isTest) {
//     config.module.preLoaders.push({
//       test: /\.js$/,
//       exclude: [
//         /node_modules/,
//         /\.spec\.js$/
//       ],
//       loader: 'isparta-instrumenter'
//     });
//   }

  /**
   * PostCSS
   * Reference: https://github.com/postcss/autoprefixer-core
   * Add vendor prefixes to your css
   */
//   config.postcss = [
//     autoprefixer({
//       browsers: ['last 2 version']
//     })
//   ];

  config.plugins = [];

  if (!isTest) {
    // Reference: https://github.com/ampedandwired/html-webpack-plugin
    // Render index.html
    config.plugins.push(
        new HtmlWebpackPlugin({
          template: './src/index.html',
          inject: 'body'
        }),

        // Reference: https://github.com/webpack/extract-text-webpack-plugin
        // Extract css files
        // Disabled when in test mode or not in build mode
        new ExtractTextPlugin('styles/app.css', {disable: false})
    );
  }

  // Add build specific plugins
    config.plugins.push(
         //Reference: http://webpack.github.io/docs/list-of-plugins.html#noerrorsplugin
         //Only emit files when there are no errors
        //new webpack.NoErrorsPlugin()

         //Reference: http://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
         //Dedupe modules in the output
        new webpack.optimize.DedupePlugin(),

         //Reference: http://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
         //Minify all javascript, switch loaders to minimizing mode
        new webpack.optimize.UglifyJsPlugin({mangle: false}),

        // Copy assets from the public folder
        // Reference: https://github.com/kevlened/copy-webpack-plugin
        new CopyWebpackPlugin([{
            from: __dirname + '/src/resources',
            to: __dirname + '/resources',
        }])
    )

  /**
   * Dev server configuration
   * Reference: http://webpack.github.io/docs/configuration.html#devserver
   * Reference: http://webpack.github.io/docs/webpack-dev-server.html
   */
  config.devServer = {
    contentBase: './src',
    stats: 'minimal'
  };

  return config;
}();
