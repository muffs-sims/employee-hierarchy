class Employee{
  constructor(name, id, managerId) {
    this.name = name;
    this.id = id;
    this.managerId = managerId;
    this.subordinates = [];
  }
  setManager(manager){
    this.manager = manager;
  }
  addSubordinate(subordinate){
    this.subordinates.push(subordinate);
  }
}
module.exports = Employee;