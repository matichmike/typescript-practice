// // Code goes here!
// const printOutput = (output: string | number) => console.log(output);

// const hobbies = ['Sports', 'Cooking'];
// const activeHobbies = ['Hiking'];
// activeHobbies.push(...hobbies);

// const person = {
//   firstName: "Mike",
//   age: 15
// }

// const copiedPerson = {...person};

// const add = (...numbers: number[]) => {
//   return numbers.reduce((currResult, currValue) => {
//     return currResult + currValue;
//   }, 0)
// }
// const addedNumbers = add(5, 10, 2, 3);

// const [hobby1, hobby2, ...remainingHobbies] = hobbies;
// const {firstName: userName, age} = person;

class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log('Department: ' + this.name)
  }

}

const accounting = new Department("Argument");
accounting.describe();

const accountingCopy = { name: 's', describe: accounting.describe };
accountingCopy.describe();