enum Role { ADMIN = 5, READ_ONLY, AUTHOR };

const person
// : {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]
//   auth: enum
// }
 = {
  name: "Mike",
  age: 31,
  hobbies: ['Sports', 'Cooking'],
  role: [2, 'author'],
  auth: Role.ADMIN
}

let favActivities: string[];
let anyArr: any[];