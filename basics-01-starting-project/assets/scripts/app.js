const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; //array

function getUserInput() {
  return parseInt(userInput.value);
}

//Generates and writes calculations log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(operationid, prevNum, nextNum, newResult) {
  const logEntry = {
    operation: operationid,
    number1: prevNum,
    number2: nextNum,
    result: newResult,
  }; //Objekti
  logEntries.push(logEntry); //array
  console.log(logEntries);
}

function calculateResult(calculationType) {
  const enteredNum = getUserInput();
  if (
    (calculationType !== "ADD" &&
      calculationType !== "SUBSTRACT" &&
      calculationType !== "MULTIPLY" &&
      calculationType !== "DIVIDE") ||
    enteredNum == 0
  ) {
    return;
  }
  const previousNumber = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNum;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNum;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNum;
    mathOperator = "*";
  } else {
    currentResult *= enteredNum;
    mathOperator = "/";
  }
  createAndWriteOutput(mathOperator, previousNumber, enteredNum);
  writeToLog(calculationType, previousNumber, enteredNum, currentResult);
}

function add() {
  calculateResult("ADD");
}
function substract() {
  calculateResult("SUBTRACT");
}
function multiply() {
  calculateResult("MULTIPLY");
}
function divide() {
  calculateResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", substract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
