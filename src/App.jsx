import { useState } from "react";
import calculatorLogo from "./assets/images/calculator-logo.png";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex-col min-w-screen min-h-screen flex justify-center items-center">
        {/* Header Section */}
        <div className="flex justify-center py-4 items-start">
          <h1 className="text-4xl font-bold ">Calculator App</h1>
          <img
            src={calculatorLogo}
            alt="Calculator Logo"
            className="w-20 h-20 ml-4"
          />
        </div>
        {/* Body Section */}
        <div className="grid grid-cols-4 grid-rows-4 gap-2">
          <button>C</button>
          <button>CE</button>
          <button>X</button>
          <button>/</button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>*</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>-</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button>+</button>
          <button>+/-</button>
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>
      </div>
    </>
  );
}

export default App;
