/*Write a function that takes an object and uses destructuring to extract the name and salary properties from it.                                                                            const employee = { name: 'Dapo', role: 'Engineer', salary: 50000, department: 'Tech' };*/


function extractEmployeeDetails(employee){
    
    const {name , salary} = employee;
    return {name , salary};
}

const employee = { name: 'Dapo', role: 'Engineer', salary: 50000, department: 'Tech' };

console.log(extractEmployeeDetails(employee));
