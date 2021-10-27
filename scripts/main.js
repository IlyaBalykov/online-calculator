const calculatorMathLine = document.getElementById("calculator-display-math-line");
const calculatorMathResult = document.getElementById("calculator-display-math-result");
const calculatorButtons = document.getElementById("calculator-keyboard");

let firstNumber = "";
let secondNumber = "";
let operator = "";
calculatorButtons.addEventListener("click", function (calc) {
  const button = calc.target;
  const buttonValue = button.textContent;

  if (buttonValue === "C") {
      resetVars();
      calculatorMathLine.textContent = "";
      calculatorMathResult.textContent = "0";
  } else if (buttonValue === "%" && firstNumber.length !== 0) {
      calculatorMathResult.textContent = calculatorMathLine.textContent / 100;
  } else if (button.classList.contains("number")) {
    if (operator.length > 0) {
      secondNumber = secondNumber + buttonValue;
    } else {
      firstNumber = firstNumber + buttonValue;
    }
  } else if (button.classList.contains("operator")) {
    if (firstNumber.length === 0 || secondNumber.length !== 0) {
      return
    }
      operator = buttonValue;
  } else if (buttonValue === "=") {
    if(secondNumber.length === 0) {
      return;
    }
    firstNumber = +firstNumber;
    secondNumber = +secondNumber;
    if (operator === "/") {
      calculatorMathResult.textContent = firstNumber / secondNumber;
    } else if (operator === "*") {
      calculatorMathResult.textContent = firstNumber * secondNumber;
    } else if (operator === "-") {
      calculatorMathResult.textContent = firstNumber - secondNumber;
    } else if (operator === "+") {
      calculatorMathResult.textContent = firstNumber + secondNumber;
    }
    resetVars()
  } else if (buttonValue === ".") {
    let number;
      if (operator.length > 0) {
        number = secondNumber;
      } else {
        number = firstNumber;
      }
    if (number.length === 0 || number.includes(".")){
      return;
    }
    if (operator.length > 0) {
      secondNumber = secondNumber + buttonValue;
    } else {
      firstNumber = firstNumber + buttonValue;
    }
  }
  calculatorMathLine.textContent = firstNumber + operator + secondNumber;
});
function resetVars() {
  firstNumber = "";
  secondNumber = "";
  operator = "";
};