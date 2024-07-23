import Button from "./button";
import { useState } from "react";
import { calculateResult, resultMaxLenght } from "../functions/calculateResult";

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
    setResultDisplay(resultMaxLenght(numbers));
  };

  const handleOperatorDisplay = function (operator) {
    if (operation) {
      const [firstNumber, currentOperator] = operation.split(" ");

      const result = calculateResult(
        parseFloat(firstNumber),
        parseFloat(numbers),
        currentOperator
      );

      setOperationDisplay(`${result} ${operator}`);
      setResultDisplay(resultMaxLenght(result.toString()));
      numbers = "";
    } else {
      setOperationDisplay(`${numbers} ${operator}`);
      numbers = "";
      setResultDisplay(resultMaxLenght(numbers));
    }
  };

  const handleRefreshButton = function () {
    operation = "";
    numbers = "";
    setOperationDisplay(operation);
    setResultDisplay(resultMaxLenght(numbers));
  };

  const handleResult = function () {
    const [firstNumber, operator] = operationDisplay.split(" ");
    const result = calculateResult(
      parseFloat(firstNumber),
      parseFloat(numbers),
      operator
    );
    setOperationDisplay(`${firstNumber} ${operator} ${numbers} =`);
    setResultDisplay(resultMaxLenght(result.toString()));
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

    setResultDisplay(resultMaxLenght(result.toString()));
  };

  const handleToggleSign = function () {
    if (numbers) {
      const toggledNumber = (parseFloat(numbers) * -1).toString();
      setResultDisplay(resultMaxLenght(toggledNumber));
    } else if (operation) {
      const parts = operation.split(" ");
      if (parts.length >= 2) {
        const lastNumber = parseFloat(parts[parts.length - 1]);
        parts[parts.length - 1] = (lastNumber * -1).toString();
        setOperationDisplay(parts.join(" "));
      }
    }
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
            onClick={handleToggleSign}
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
