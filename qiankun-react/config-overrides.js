const { name } = require('./package.json');
module.exports = function override(config, env) {
  config.output.publicPath = process.env.NODE_ENV === 'production' ? `/app-react/` : '/';
  config.output.library = `${name}-[name]`;
  config.output.libraryTarget = 'umd';
  return config
}