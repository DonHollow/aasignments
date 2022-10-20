let employees = []

function Employees(name, jobTitle, salary, status) {
  this.name = name;
  this.job = jobTitle;
  this.salary = salary;
  this.status = status || "Full Time";
  this.printEmployeeForm = function() {
    console.log("Name: " + "" + this.name + ", " + "Job Title: " + "" + this.job + ", " + "Salary: " + "" + this.salary + ", " + "Status: " + "" + this.status);
  }
} 

let bob = new Employees("Bob", "V School Instructor", "$3000/hour", "Part Time");

let yreish = new Employees("Yreish", "V School Instructor", "$3000/hour", "Contract");

let jesse = new Employees("Jesse", "V School Instructor", "$3000/hour");

employees.push(bob.printEmployeeForm())
employees.push(yreish.printEmployeeForm())
employees.push(jesse.printEmployeeForm())


// console.log(employees)
// console.log(bob)
// console.log(yreish)
// console.log(jesse)