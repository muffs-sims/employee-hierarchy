const CsvReader = require("./CsvReader");

exports.getReader = (config) => {
  if(config.type === "csv"){
    return new CsvReader(config.csvReader)
  }else{
    throw new Error("not supported")
  }
}