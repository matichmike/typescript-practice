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
  // name: string;
  // private id: string;
  private employees: string[] = [];

  constructor(private id: string, public name: string) {
    // this.name = n;
    // this.id = id;
  }

  describe(this: Department) {
    console.log(`${this.id} ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

}


const accounting = new Department('d1',"Argument");
accounting.describe();

accounting.addEmployee('Mike');
accounting.addEmployee('Greg');

accounting.printEmployeeInfo();


// const accountingCopy = { name: 's', describe: accounting.describe };
// accountingCopy.describe();