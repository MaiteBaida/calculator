import Button from "./button";

function Calculator() {
  return (
    <main>
      <h1 className="text-3xl font-bold underline">Calculator</h1>
      <Button label="1" style="number" />
      <Button label="+" style="operator" />
      <Button label="%" style="specialOperator" />
    </main>
  );
}

export default Calculator;
