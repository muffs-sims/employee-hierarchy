const SimpleTransformer = require("./SimpleTransformer");
const FastTransformer = require("./FastTransformer");

exports.getTransformer = (config) => {
  if(config.type === "simple"){
    return new SimpleTransformer(config)
  }else if(config.type === "fast"){
    return new FastTransformer(config)
  }
  else{
    throw new Error("not supported")
  }
}