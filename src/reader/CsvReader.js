const parse = require('csv-parse/lib/sync');
const fs = require('fs').promises;
const Employee = require('../objects/Employee');

class CsvReader{
  constructor(config) {
    this.file = config.file;
  }
  async read(){
    let fileStr = await fs.readFile(this.file, 'utf8');
    let parsedData = parse(fileStr, {
      columns: true
    });
    return parsedData.map( d => {
      return new Employee(d.name, d.id, d.managerId);
    })
  }
}
module.exports = CsvReader;