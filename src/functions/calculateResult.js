const calculateResult = function (num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "x":
      return num1 * num2;
    case "÷":
      return num1 / num2;
    default:
      return null;
  }
};

export default calculateResult;
