"use strict";

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName() {
        return this.firstName + " " + this.lastName;

    }
}


class Employee extends Person {
    constructor(id, firstName, lastName, jobTitle, payRate) {
        super(firstName, lastName);

        this.employeeId = id;
        this.jobTitle = jobTitle;
        this.payRate = payRate;

    }
    getGrossPay(hoursWorked) {
        return hoursWorked * this.payRate;

    }


}




//Exercise 1 
let person1 = new Person(
    "Mireya", "Avila");
console.log(person1.getFullName());

console.log("------------")

let employee1 = new Employee(
    1, "Mireya", "Avila", "Server", 25)
console.log(`Employee ${employee1.getFullName()} created`);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);

console.log("------------")

let employee2 = new Employee(
    2, "Isabel", "Avila", "Singer", 45)
console.log(`Employee ${employee2.getFullName()} created`);
console.log(`Job title is ${employee2.jobTitle}`);
console.log(`Pay rate is $${employee2.payRate}`);

console.log("------------")

//Exercise 3

let employee3 = new Employee(
    3, "Daisy", "Jones", "Cashier", 20)
console.log(`Full Name is ${employee3.getFullName()}`);
console.log(`Gross Pay $${employee3.getGrossPay(40)}`);

console.log("------------")


let employee4 = new Employee(
    4, "David", "Smith", "lift driver", 18)
console.log(`Full Name is ${employee4.getFullName()}`);
console.log(`Gross Pay $${employee4.getGrossPay(20)}`);