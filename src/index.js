const config = require('./config');

const { getReader } = require('./reader');
const { getTransformer } = require('./transformer');
const { getWriter } = require('./writer');


const reader = getReader(config.reader);
const transformer = getTransformer(config.transformer);
const writer = getWriter(config.writer);


(async () => {
  const employeesList = await reader.read();
  const topLevelEmployees = transformer.sortByHierarchy(employeesList);
  writer.write(topLevelEmployees);
})();

