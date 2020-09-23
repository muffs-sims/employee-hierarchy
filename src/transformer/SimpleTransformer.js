class SimpleTransformer{
  sortByHierarchy(employees){
    let employeesWithoutManagers = []
    employees.forEach(employee => {
      let manager = employees.find( e => e.id == employee.managerId);
      if(manager){
        employee.setManager(manager);
        manager.addSubordinate(employee);
      }else{
        employeesWithoutManagers.push(employee);
      }
    });
    return employeesWithoutManagers;
  }
}
module.exports = SimpleTransformer;