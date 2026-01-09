import { useState } from "react";
import calculatorLogo from "./assets/images/calculator-logo.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen min-w-screen flex justify-center items-center">
        {/* Header Section */}
        <div className="flex justify-center py-4 items-center">
          <h1 className="text-4xl font-bold ">Calculator App</h1>
          <img
            src={calculatorLogo}
            alt="Calculator Logo"
            className="w-20 h-20 ml-4"
          />
        </div>
      </div>
    </>
  );
}

export default App;
