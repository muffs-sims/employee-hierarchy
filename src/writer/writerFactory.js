const ConsoleReader = require("./ConsoleWriter");

exports.getWriter = (config) => {
  if(config.type === "console"){
    return new ConsoleReader(config)
  }else{
    throw new Error("not supported")
  }
}