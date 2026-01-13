import { useState } from "react";
import calculatorLogo from "./assets/images/calculator-logo.png";
import "./App.css";
import { parse } from "postcss";

function App() {
  const [currentValue, setCurrentValue] = useState("0");
  const [previousValue, setPreviousValue] = useState("0");
  const [operation, setOperation] = useState(null);
  const [checkOperation, setCheckOperation] = useState(false);
  const [result, setResult] = useState(null);

  // const handleCurrentValue = (currValue) => {
  //   if (checkOperation) {
  //     setCurrentValue(String(currValue));
  //     setCheckOperation(false);
  //   } else {
  //     setCurrentValue(
  //       currentValue === "0" ? String(currValue) : currentValue + currValue
  //     );
  //   }
  // };

  const handleCurrentValue = (currValue) => {
    setCurrentValue(String(currValue));
  };

  const handleDecimal = () => {
    if (checkOperation) {
      setCurrentValue("0.");
      setCheckOperation(false);
    } else if (currentValue.indexOf(".") === -1) {
      setCurrentValue(currentValue + ".");
    }
  };

  // const handleOperation = (nextOperation) => {
  //   const input = parseFloat(currentValue);

  //   if (previousValue === null) {
  //     setPreviousValue(input);
  //     setResult(input);
  //     setCurrentValue("0");
  //   } else {
  //     setResult(calculate(previousValue, input, operation));
  //     setPreviousValue(result);
  //     setCurrentValue("0");
  //   }

  //   setOperation(nextOperation);
  // };

  const handleOperation = (nextOperation) => {
    const input = parseFloat(currentValue);
    const prevValue = parseFloat(previousValue);

    setOperation(nextOperation);
    setResult(calculate(prevValue, input, operation));
    setPreviousValue(String(calculate(prevValue, input, operation)));
    console.log(result);

    setCurrentValue("0");
  };

  const calculate = (firstValue, secondValue, operation) => {
    switch (operation) {
      case "+":
        return firstValue + secondValue;
      case "-":
        return firstValue - secondValue;
      case "×":
        return firstValue * secondValue;
      case "÷":
        return firstValue / secondValue;
      case "%":
        return firstValue % secondValue;
      default:
        return secondValue;
    }
  };

  const handleTotal = () => {
    const input = parseFloat(currentValue);

    if (previousValue !== null) {
      setResult(calculate(previousValue, input, operation));
      setCurrentValue("0");
      setPreviousValue("0");
      setOperation(null);
      setCheckOperation(true);
    }
  };

  const handleClearEntry = () => {
    setCurrentValue("0");
  };

  const handleAllClear = () => {
    setCurrentValue("0");
    setResult("0");
    setPreviousValue(null);
    setOperation(null);
    setCheckOperation(null);
  };

  const handleBackspace = () => {
    if (currentValue.length > 1) {
      setCurrentValue(currentValue.slice(0, 1));
    } else {
      setCurrentValue("0");
    }
  };

  return (
    <>
      <div className="flex-col min-w-screen min-h-screen flex justify-center items-center">
        {/* Header Section */}
        <div className="flex justify-center py-4 items-center">
          <img
            src={calculatorLogo}
            alt="Calculator Logo"
            className="w-30 h-30"
          />
          <h1 className="text-4xl font-bold">Calculator App</h1>
          <br />
          Previous Value:
          <input type="text" readOnly value={previousValue} />
          <br />
          Current Value:
          <input type="text" readOnly value={currentValue} />
          <br />
          Operation:
          <input type="text" readOnly value={operation} />
          <br />
          Result:
          <input type="text" readOnly value={result} />
        </div>
        {/* Body Section */}
        <div>
          <div className="bg-black px-2 py-1 my-2 text-white text-2xl w-full rounded-lg">
            <input
              type="number"
              value={result}
              className="text-right"
              disabled
            />
          </div>
          <div className="bg-black px-2 py-3 my-2 text-white text-2xl w-full rounded-lg">
            <input
              type="number"
              value={currentValue}
              className="text-right"
              readOnly
            />
          </div>
          <div className="grid grid-cols-4 grid-rows-4 gap-2 text-xl mt-4">
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleOperation("%")}
            >
              %
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleAllClear()}
            >
              AC
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleClearEntry()}
            >
              CE
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleBackspace()}
            >
              ←
            </button>
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
              1/x
            </button>
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
              x²
            </button>
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
              √x
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleOperation("÷")}
            >
              ÷
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleCurrentValue("1")}
            >
              1
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleCurrentValue("2")}
            >
              2
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleCurrentValue("3")}
            >
              3
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleOperation("×")}
            >
              ×
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleCurrentValue("4")}
            >
              4
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleCurrentValue("5")}
            >
              5
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleCurrentValue("6")}
            >
              6
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleOperation("-")}
            >
              -
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleCurrentValue("7")}
            >
              7
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleCurrentValue("8")}
            >
              8
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleCurrentValue("9")}
            >
              9
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleOperation("+")}
            >
              +
            </button>
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
              +/-
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleCurrentValue("0")}
            >
              0
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleDecimal()}
            >
              .
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleTotal()}
            >
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
