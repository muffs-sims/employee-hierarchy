const writerFactory = require('./writerFactory');

exports.getWriter = (config) => {
  return writerFactory.getWriter(config);
}