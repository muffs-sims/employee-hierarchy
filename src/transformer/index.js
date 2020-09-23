const transformerFactory = require('./transformerFactory');

exports.getTransformer = (config) => {
  return transformerFactory.getTransformer(config);
}