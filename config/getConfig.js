// Generate Webpack config, dependending on the environment (development or production)
// The exported function is used by `webpack.*.config.js` files.

const path = require('path');
const webpack = require('webpack');

const constants = require('./constants');

function getPlugins(env) {
  const envPlugin = new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify(env)
    }
  });

  // fetch polyfill, see http://mts.io/2015/04/08/webpack-shims-polyfills/
  // const fetchPlugin = new webpack.ProvidePlugin({
  //   'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
  // });

  const plugins = [envPlugin];
  if (env === 'development') {
    plugins.push(new webpack.HotModuleReplacementPlugin());
    // tells the reloader to not reload if there is a syntax error in your code.
    // The error is simply printed in the console, and the component will reload when you fix the error.)
    plugins.push(new webpack.NoErrorsPlugin());
  }
  return plugins;
}

function getLoaders(env) {
  console.log(env);
  const jsLoader = {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    loaders: env === 'development' ? ['react-hot', 'babel'] : ['babel']
  };

  const cssLoader = {
    test: /\.css$/
  };
  const stylusLoader = {
    test: /\.styl$/
  };

  const loaders = [jsLoader];
  return loaders;
}

function getEntry(env) {
  return {
    app: env === 'development' ? (
      [
        `webpack-dev-server/client?http://localhost:${constants.port}`,
        'webpack/hot/only-dev-server',
        './src/index.jsx'
      ]
    ) : (
      './src/index.jsx'
    )
  };
}

function getOutput(env) {
  const rootPath = path.resolve(__dirname, '..', constants.staticFolder);
  const filename = 'build/bundle-[name].js';
  return env === 'development' ? (
    {
      path: rootPath,
      filename,
      hot: true
    }
  ) : (
    {
      filename: `${constants.staticFolder}/${filename}`
    }
  );
}

module.exports = function (env) {
  const config = {
    debug: true,
    noInfo: true, // set to false to see a list of every file being bundled.
    entry: getEntry(env),
    target: env === 'test' ? 'node' : 'web', // necessary per https://webpack.github.io/docs/testing.html#compile-and-test
    output: getOutput(env),
    plugins: getPlugins(env),
    module: {
      loaders: getLoaders(env)
    },
    resolve: {
      extensions: ['', '.js', '.jsx']
    },
    // postcss() {
    //   return [autoprefixer];
    // }
  };
  if (env === 'development') {
    config.devtool = 'eval';
  }
  return config;
};
