const employee = {
    name: `Mike Z`,
    street: `405 17th St`
};


function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newemp1 = { ...employee };
  
    newemp1[key] = value;
  
    return newemp1;
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    
  
    employee[key] = value;
  
    return employee;
  }

  function deleteFromEmployeeByKey(employee, key) {
    const removeemp = { ...employee };
  
    delete removeemp[key];
  
    return removeemp;
  }

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
