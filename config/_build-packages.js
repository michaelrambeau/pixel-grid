const fs = require('fs');
const del = require('del');
const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const pkg = require('../packages/pixel-grid-react/');

const bundles = [
  {
    format: 'cjs', ext: '.js', plugins: [],
    babelPresets: ['es2015-rollup', 'react'],
    babelPlugins: [
      'transform-es2015-destructuring',
      'transform-es2015-function-name',
      'transform-es2015-parameters',
      'transform-es2015-modules-commonjs',
    ]
  }
];

var promise = Promise.resolve();

// Clean up the output directory
promise = promise.then(() => del(['../packages/pixel-grid-react/build/*']));

// Compile source code into a distributable format with Babel and Rollup
for (const config of bundles) {
  promise = promise.then(() => rollup.rollup({
    entry: '../packages/pixel-grid-react/index.js',
    external: Object.keys(pkg.dependencies),
    plugins: [
      babel({
        babelrc: false,
        exclude: 'node_modules/**',
        presets: config.babelPresets,
        plugins: config.babelPlugins,
      })
    ].concat(config.plugins),
  }).then(bundle => bundle.write({
    dest: `../packages/pixel-grid-react/build/${config.moduleName || 'main'}${config.ext}`,
    format: config.format,
    sourceMap: !config.minify,
    moduleName: config.moduleName,
  })));
}

// Copy package.json and LICENSE.txt
promise = promise.then(() => {
  delete pkg.private;
  delete pkg.devDependencies;
  delete pkg.scripts;
  delete pkg.eslintConfig;
  delete pkg.babel;
  fs.writeFileSync('dist/package.json', JSON.stringify(pkg, null, '  '), 'utf-8');
  fs.writeFileSync('dist/LICENSE.txt', fs.readFileSync('LICENSE.txt', 'utf-8'), 'utf-8');
});

promise.catch(err => console.error(err.stack)); // eslint-disable-line no-console
