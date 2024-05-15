import Button from "./button";
import { useState } from "react";

function Calculator() {
  const [resultDisplay, setResultDisplay] = useState(" ");
  const [operationDisplay, setOperationDisplay] = useState(" ");

  let numbers = resultDisplay;
  let operation = operationDisplay;

  //Handle displays
  const handleResultDisplay = function (label) {
    numbers === " " ? (numbers = label) : (numbers = numbers + label);
    setResultDisplay(numbers);
  };

  const handleOperatorDisplay = function (operator) {
    operation = `${operation} ${numbers} ${operator}`;
    setOperationDisplay(operation);

    numbers = "";
    setResultDisplay(numbers);
  };

  //Handle Refresh
  const handleRefreshButton = function () {
    operation = "";
    numbers = "";
    setOperationDisplay(operation);
    setResultDisplay(numbers);
  };

  //Operations

  let inputOperator;
  let numbersArray = [];

  function findOperator(str) {
    const operatorsArray = ["+", "-", "x", "÷", "%", "±"];

    for (let operator of operatorsArray) {
      if (operation.includes(operator)) {
        inputOperator = operator;
        break;
      }
    }

    return inputOperator;
  }

  const stringToArray = function () {
    const operationArray = operation.split(" ");

    numbersArray = operationArray
      .filter((str) => str.trim() !== "" && !isNaN(str))
      .map((str) => Number(str));

    return numbersArray;
  };

  const result = function () {
    handleOperatorDisplay("=");
    stringToArray();
    findOperator(operation);

    console.log(inputOperator, numbersArray);

    if (inputOperator === "+") {
      setResultDisplay(numbersArray[0] + numbersArray[1]);
    } else if (inputOperator === "-") {
      setResultDisplay(numbersArray[0] - numbersArray[1]);
    } else if (inputOperator === "x") {
      setResultDisplay(numbersArray[0] * numbersArray[1]);
    } else if (inputOperator === "÷") {
      setResultDisplay(numbersArray[0] / numbersArray[1]);
    }
  };

  const addition = function () {
    handleOperatorDisplay("+");
    stringToArray();
  };

  return (
    <main className="bg-custom-yellow flex justify-center h-screen">
      <section className="m-7">
        <div className="bg-custom-black text-white flex flex-col items-end p-6 rounded-t-2 shadow-lg">
          <span className="h-6">{operationDisplay}</span>
          <span className="text-3xl h-9">{resultDisplay}</span>
        </div>
        <div className="bg-custom-blue grid grid-cols-4 gap-2 p-6 rounded-b-2 shadow-lg">
          <Button label="AC" style="specialOperator" />
          <Button
            label="±"
            style="specialOperator"
            onClick={() => handleOperatorDisplay("±")}
          />
          <Button
            label="%"
            style="specialOperator"
            onClick={() => handleOperatorDisplay("%")}
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
          <Button label="+" style="operator" onClick={addition} />
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
          <Button label="=" style="operator" onClick={result} />
        </div>
      </section>
    </main>
  );
}

export default Calculator;
