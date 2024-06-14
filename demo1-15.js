"use strict"

class Employee {
    constructor(id, firstName, lastName, jobTitle, payRate) {
        this.employeeId = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        this.payRate = payRate;
    }
    getFullName() {
        return this.firstName + " " + this.lastName;

    }

    promote(newJobTitle, newPayRate) {
        this.jobTitle = newJobTitle;
        this.payRate = newPayRate;
    }

    getIntro() {
        let intro =
            "Hi! I'm " + this.getFullName() + " and I am a " +
            this.jobTitle;
        return intro;
    }
}



// let employee1 = new Employee(
//     1, "Ian", "Auston", "Graphic Artist", 42.50);
// console.log(`Employee ${employee1.firstName} created`);

// let employee1 = new Employee(
//     1, "Ian", "Auston", "Graphic Artist", 42.50);
// console.log(`Employee ${employee1.getFullName()} created`);
// console.log(`Job title is ${employee1.jobTitle}`);
// console.log(`Pay rate is $${employee1.payRate}`);

// console.log("-----------------")

// let employee2 = new Employee(
//     1, "Mike", "Smith", "Teacher", 32.50);
// console.log(`Employee ${employee2.getFullName()} created`);
// console.log(`Job title is ${employee2.jobTitle}`);
// console.log(`Pay rate is $${employee2.payRate}`);


//Exercise 2 pg. 1-16
// let employee1 = new Employee(
//     1, "Ian", "Auston", "Graphic Artist", 42.50);
// console.log(`Employee ${employee1.getFullName()} created`);
// employee1.promote("Sr. Graphic Artist", 46.75); // creates new title and pay rate 
// console.log(`Job title is ${employee1.jobTitle}`);
// console.log(`Pay rate is $${employee1.payRate}`);

// console.log("-----------------")

// let employee2 = new Employee(
//     1, "Mike", "Smith", "Teacher", 32.50);
// console.log(`Employee ${employee2.getFullName()} created`);
// employee2.promote("Principal", 45.50); // creates new title and pay rate 
// console.log(`Job title is ${employee2.jobTitle}`);
// console.log(`Pay rate is $${employee2.payRate}`);

//Exercise 3 pg. 1-16 

let employee1 = new Employee(
    1, "Ian", "Auston", "Graphic Artist", 42.50);
let intro = employee1.getIntro();
console.log(intro);
employee1.promote("Sr. Graphic Artist", 46.75);
console.log(`Job title is ${employee1.jobTitle}`);
console.log(`Pay rate is $${employee1.payRate}`);

console.log("-----------------")
let employee2 = new Employee(
    1, "Mike", "Smith", "Teacher", 32.50);
let intro2 = employee2.getIntro();
console.log(intro2);
employee2.promote("Principal", 45.50);
console.log(`Job title is ${employee2.jobTitle}`);
console.log(`Pay rate is $${employee2.payRate}`);