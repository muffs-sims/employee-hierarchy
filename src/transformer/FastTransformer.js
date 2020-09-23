const Employee = require('../objects/Employee');

class FastTransformer{
  sortByHierarchy(employees){
    let rootEmployee = new Employee("root", "");
    this._addChildren(rootEmployee, employees);
    return rootEmployee.subordinates;
  }

  _addChildren(rootEmployee, employees){
    employees.forEach(employee => {
      if (employee.managerId == rootEmployee.id){
        rootEmployee.addSubordinate(employee);
        employee.setManager(rootEmployee);
      }
    });
    rootEmployee.subordinates.forEach(x => this._addChildren(x, employees));
  }

}
module.exports = FastTransformer;