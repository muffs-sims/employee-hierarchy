const readerFactory = require('./readerFactory');

exports.getReader = (config) => {
  return readerFactory.getReader(config);
}