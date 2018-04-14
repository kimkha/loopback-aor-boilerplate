const webpackDevMiddleware = require('webpack-dev-middleware'); // eslint-disable-line
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const path = require('path');

module.exports = (app, options) => {
  const config = require(path.resolve(process.cwd(), options.configFile)); // eslint-disable-line
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath})); // eslint-disable-line
  app.use(webpackHotMiddleware(compiler));
};
