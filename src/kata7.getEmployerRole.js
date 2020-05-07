const getEmployerRole = (employeeName, employees) => {
    const x = employees.find(e => e.name === employeeName);
    console.log(x.role);
    return x.role;

};

module.exports = getEmployerRole;

