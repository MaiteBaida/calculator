import Button from "./button";
import { useState } from "react";

function Calculator() {
  const [resultDisplay, setResultDisplay] = useState("");
  const [operationDisplay, setOperationDisplay] = useState("");

  let numbers = resultDisplay;
  let operation = operationDisplay;

  const handleResultDisplay = function (label) {
    if (numbers === "0" && label !== ".") {
      numbers = label;
    } else {
      numbers = numbers + label;
    }
    setResultDisplay(numbers);
  };

  const handleOperatorDisplay = function (operator) {
    operation = `${numbers} ${operator}`;
    setOperationDisplay(operation);
    numbers = "";
    setResultDisplay(numbers);
  };

  const handleRefreshButton = function () {
    operation = "";
    numbers = "";
    setOperationDisplay(operation);
    setResultDisplay(numbers);
  };

  let numbersArray = [];
  let inputOperator = "";

  const calculateResult = function () {
    const [num1, num2] = numbersArray;
    switch (inputOperator) {
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

  const handleResult = function () {
    handleOperatorDisplay("=");
    numbersArray = numbers.split(" ").map((str) => parseFloat(str));
    inputOperator = operationDisplay.trim().split(" ")[1];
    const result = calculateResult();
    setResultDisplay(result.toString());
  };

  const handlePercentage = function () {
    setOperationDisplay(`${operationDisplay.trim()} ${numbers} %`);

    const parts = `${operationDisplay.trim()} ${numbers} %`.trim().split(/\s+/);

    if (parts.length < 4) {
      setResultDisplay("0");
      return;
    }

    const secondValue = parseFloat(parts[2]);
    const firstValue = parseFloat(parts[0]);
    const operator = parts[1];

    let result;
    console.log(operator);
    switch (operator) {
      case "+":
        result = firstValue + firstValue * (secondValue / 100);
        break;
      case "-":
        result = firstValue - firstValue * (secondValue / 100);
        break;
      case "x":
        result = firstValue * (secondValue / 100);
        break;
      case "÷":
        result = firstValue / (secondValue / 100);
        break;
      default:
        setResultDisplay("0");
        return;
    }

    setResultDisplay(result.toString());
  };

  return (
    <main className="bg-custom-yellow flex justify-center h-screen">
      <section className="m-7">
        <div className="bg-custom-black text-white flex flex-col items-end p-6 rounded-t-2 shadow-lg">
          <span className="h-6">{operationDisplay}</span>
          <span className="text-3xl h-9">{resultDisplay}</span>
        </div>
        <div className="bg-custom-blue grid grid-cols-4 gap-2 p-6 rounded-b-2 shadow-lg">
          <Button
            label="AC"
            style="specialOperator"
            onClick={handleRefreshButton}
          />
          <Button
            label="±"
            style="specialOperator"
            onClick={() => handleOperatorDisplay("±")}
          />
          <Button
            label="%"
            style="specialOperator"
            onClick={handlePercentage}
          />
          <Button
            label="÷"
            style="operator"
            onClick={() => handleOperatorDisplay("÷")}
          />
          <Button
            label="7"
            style="number"
            onClick={() => handleResultDisplay("7")}
          />
          <Button
            label="8"
            style="number"
            onClick={() => handleResultDisplay("8")}
          />
          <Button
            label="9"
            style="number"
            onClick={() => handleResultDisplay("9")}
          />
          <Button
            label="x"
            style="operator"
            onClick={() => handleOperatorDisplay("x")}
          />
          <Button
            label="4"
            style="number"
            onClick={() => handleResultDisplay("4")}
          />
          <Button
            label="5"
            style="number"
            onClick={() => handleResultDisplay("5")}
          />
          <Button
            label="6"
            style="number"
            onClick={() => handleResultDisplay("6")}
          />
          <Button
            label="-"
            style="operator"
            onClick={() => handleOperatorDisplay("-")}
          />
          <Button
            label="1"
            style="number"
            onClick={() => handleResultDisplay("1")}
          />
          <Button
            label="2"
            style="number"
            onClick={() => handleResultDisplay("2")}
          />
          <Button
            label="3"
            style="number"
            onClick={() => handleResultDisplay("3")}
          />
          <Button
            label="+"
            style="operator"
            onClick={() => handleOperatorDisplay("+")}
          />
          <Button label="R" style="operator" onClick={handleRefreshButton} />
          <Button
            label="0"
            style="number"
            onClick={() => handleResultDisplay("0")}
          />
          <Button
            label="."
            style="number"
            onClick={() => handleResultDisplay(".")}
          />
          <Button label="=" style="operator" onClick={handleResult} />
        </div>
      </section>
    </main>
  );
}

export default Calculator;
