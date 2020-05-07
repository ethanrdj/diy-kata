const getEmployerRole = (employeeName, employees) => {
    const person = employees.find(employee => employee.name === employeeName);
    console.log(person.role);
    return person.role;

};

module.exports = getEmployerRole;