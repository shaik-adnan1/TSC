// console.log("Hello there");
// const students = [
//   {
//     name: "John",
//     score: "80",
//   },
//   {
//     name: "Kiran",
//     score: "20",
//   },
// ];

// for (const student of students) {
//   console.log("Name: ", student.name);
//   console.log("Score: ", student.name);
// }

// const addNumber = (a: number, b: number) => {
//   return a + b;
// };

// console.log(addNumber(2, 3));
// console.log(addNumber("test", 3));

let firstname: string = "Adnan";

// firstname = 1;

let automobile = "BMW";

const city = "New York";
let students = 30;

let studentAsString: string = students.toString();

/** Number types */

let age: number = 20;
let year: number = 2024;
const numberOfMembers = 62;
// numberOfMembers = 62;

let stringToNumber: number = parseInt("1985");

let isStudent: boolean = false;
const asAlwaysStudent = true;
let minAge = age >= 6 ? true : false;

let user: undefined;
// console.log(user);

let userRole: null;
userRole = null;
// console.log(userRole);

console.log(userRole === user);

if (!userRole) {
  console.log("This condition is true");
}

if (!user) {
  console.log("This condition is true");
}
