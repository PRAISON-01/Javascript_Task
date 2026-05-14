//Write a function that takes the following employee object and returns the salary.   const employee = {name: "Dapo",role: "Engineer",salary: 50000};

function getSalary(employee){
    const {salary } = employee;
    return {salary};
}

const employee = {name: "Dapo",role: "Engineer",salary: 50000};

console.log(getSalary(employee));
