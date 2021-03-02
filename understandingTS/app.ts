type Combinable = number | string;
type Conversion = 'as-num' | 'as-text';

function combine(
  input1: Combinable, 
  input2: Combinable, 
  resultConversion: Conversion
  ) {
  let result;
  if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-num') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultConversion === 'as-num') {
    return +result;
  } else {
    return result.toString();
  }
}

const combineNums = combine(30, 25, 'as-num');

const combineNames = combine("David", "Smith", 'as-text');