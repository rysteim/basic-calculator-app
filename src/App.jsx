import { useState } from "react";
import calculatorLogo from "./assets/images/calculator-logo.png";
import "./App.css";

function App() {
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
            <input type="number" disabled />
          </div>
          <div className="bg-black px-2 py-3 my-2 text-white text-2xl w-full rounded-lg">
            <input type="number" />
          </div>
          <div className="grid grid-cols-4 grid-rows-4 gap-2 text-xl mt-4">
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
              %
            </button>
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
              C
            </button>
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
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
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
              1
            </button>
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
              2
            </button>
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
              3
            </button>
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
              ×
            </button>
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
              4
            </button>
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
              5
            </button>
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
              6
            </button>
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
              -
            </button>
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
              7
            </button>
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
              8
            </button>
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
              9
            </button>
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
              +
            </button>
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
              +/-
            </button>
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
              0
            </button>
            <button className="bg-black text-white rounded-xl p-3 font-semibold hover:bg-gray-700 active:bg-gray-800">
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
