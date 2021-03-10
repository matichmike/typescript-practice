// Code goes here!
const printOutput = (output: string | number) => console.log(output);

const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];
activeHobbies.push(...hobbies);

const person = {
  name: "Mike",
  age: 15
}

const copiedPerson = {...person};

const add = (...numbers: number[]) => {
  return numbers.reduce((currResult, currValue) => {
    return currResult + currValue;
  }, 0)
}
const addedNumbers = add(5, 10, 2, 3)