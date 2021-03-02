let userInput: unknown;
let userName: string;
userInput = 5;
userInput = "John";

if (typeof userInput === 'string') {
  userName = userInput;
}

function genError(message: string, code: number): never {
  throw {message: message, errorCode: code};
}

genError("Not found", 404);