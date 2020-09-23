class ConsoleWriter{
  write(employeesWithoutManagers){
    employeesWithoutManagers.forEach(e => {
      this._printHeirarchy(e);
    })
  }
  _printHeirarchy(employee, spaceCount = 0){
    let spaces = Array(spaceCount * 6).fill(" ").join("");
    console.log(`${spaces}${employee.name}`)
    employee.subordinates.forEach(s => {
        this._printHeirarchy(s, spaceCount + 1);
    });
  }
}

module.exports = ConsoleWriter;