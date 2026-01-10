import { useState } from "react";
import calculatorLogo from "./assets/images/calculator-logo.png";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");
  const [total, setTotal] = useState("0");

  const handleNumberClick = (value) => {
    if (display === "0") {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  const handleClearEntry = () => {
    setDisplay("0");
  };

  const handleAllClear = () => {
    setTotal("0");
    setDisplay("0");
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
        </div>
        {/* Body Section */}
        <div>
          <div className="bg-black px-2 py-1 my-2 text-white text-2xl w-full rounded-lg">
            <input type="number" value={display} disabled />
          </div>
          <div className="bg-black px-2 py-3 my-2 text-white text-2xl w-full rounded-lg">
            <input type="number" value={display} />
          </div>
          <div className="grid grid-cols-4 grid-rows-4 gap-2 text-xl mt-4">
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
              %
            </button>
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
              AC
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={handleClear}
            >
              CE
            </button>
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
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
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
              ÷
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleNumberClick("1")}
            >
              1
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleNumberClick("2")}
            >
              2
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleNumberClick("3")}
            >
              3
            </button>
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
              ×
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleNumberClick("4")}
            >
              4
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleNumberClick("5")}
            >
              5
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleNumberClick("6")}
            >
              6
            </button>
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
              -
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleNumberClick("7")}
            >
              7
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleNumberClick("8")}
            >
              8
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleNumberClick("9")}
            >
              9
            </button>
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
              +
            </button>
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
              +/-
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleNumberClick("0")}
            >
              0
            </button>
            <button
              className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800"
              onClick={() => handleNumberClick("0.0")}
            >
              .
            </button>
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
