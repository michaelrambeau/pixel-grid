// script to be generate bundles before publishing on npm
// using Rollup module bundler
// npm script: `npm run build-packages`

const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const path = 'packages/pixel-grid-react'

const config = {
  entry: `${path}/index.js`,
  dest: `${path}/build/bundle.js`,
  format: 'cjs',
  plugins: [
    babel({
      babelrc: false,
      presets: ['es2015-rollup', 'react']
    }),
    // npm({
    //   jsnext: true,
    //   main: true
    // }),
    // commonjs({
    //   include: 'node_modules/**'
    // })
  ]
};

var promise = Promise.resolve() // eslint-disable-line no-var
promise = promise
  .then(() => rollup.rollup(config))
  .then((bundle) => bundle.write({
    dest: config.dest,
    format: config.format,
    sourceMap: !config.minify
  }))
  .then(() => console.log('Packages built!', config.dest)) // eslint-disable-line no-console

promise.catch(err => console.error(err.stack)) // eslint-disable-line no-console
