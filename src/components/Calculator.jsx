import Button from "./button";
import { useState } from "react";

function Calculator() {
  const [resultDisplay, setResultDisplay] = useState(" ");
  const [operationDisplay, setOperationDisplay] = useState(" ");

  let numbers = resultDisplay;

  const handleResultDisplay = function (label) {
    // if (numbers === "") {
    //   numbers = label.toString();
    // } else {
    //   numbers = numbers + label.toString();
    // }
    numbers === 0
      ? (numbers = label.toString())
      : (numbers = numbers + label.toString());

    console.log(numbers); //delete console.log later
    setResultDisplay(numbers);
  };

  const handleOperatorDisplay = function (number, operator) {};

  return (
    <main className="bg-custom-yellow flex justify-center h-screen">
      <section className="m-7">
        <div className="bg-custom-black text-white flex flex-col items-end p-6 rounded-t-2 shadow-lg">
          <span>Operation</span>
          <span className="text-3xl">{resultDisplay}</span>
        </div>
        <div className="bg-custom-blue grid grid-cols-4 gap-2 p-6 rounded-b-2 shadow-lg">
          <Button label="AC" style="specialOperator" />
          <Button label="±" style="specialOperator" />
          <Button label="%" style="specialOperator" />
          <Button label="÷" style="operator" />
          <Button
            label="7"
            style="number"
            onClick={() => handleResultDisplay(7)}
          />
          <Button
            label="8"
            style="number"
            onClick={() => handleResultDisplay(8)}
          />
          <Button
            label="9"
            style="number"
            onClick={() => handleResultDisplay(9)}
          />
          <Button label="x" style="operator" />
          <Button
            label="4"
            style="number"
            onClick={() => handleResultDisplay(4)}
          />
          <Button
            label="5"
            style="number"
            onClick={() => handleResultDisplay(5)}
          />
          <Button
            label="6"
            style="number"
            onClick={() => handleResultDisplay(6)}
          />
          <Button label="-" style="operator" />
          <Button
            label="1"
            style="number"
            onClick={() => handleResultDisplay(1)}
          />
          <Button
            label="2"
            style="number"
            onClick={() => handleResultDisplay(2)}
          />
          <Button
            label="3"
            style="number"
            onClick={() => handleResultDisplay(3)}
          />
          <Button label="+" style="operator" />
          <Button label="R" style="operator" />
          <Button
            label="0"
            style="number"
            onClick={() => handleResultDisplay(0)}
          />
          <Button label="." style="number" />
          <Button label="=" style="operator" />
        </div>
      </section>
    </main>
  );
}

export default Calculator;
