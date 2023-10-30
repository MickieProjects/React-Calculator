import React, { useState } from "react";

const App = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [result, setResult] = useState("");
  
  // addition
  const add = () => {
    const num1 = parseInt(value1);
    const num2 = parseInt(value2);
    const sum = num1 + num2;

    setResult(sum);
  };
  // sub
  const sub = () => {
    const num1 = parseInt(value1);
    const num2 = parseInt(value2);
    const sum = num1 - num2;

    setResult(sum);
  };
  // mul
  const mul = () => {
    const num1 = parseInt(value1);
    const num2 = parseInt(value2);
    const sum = num1 * num2;

    setResult(sum);
  };
  // div
  const div = () => {
    const num1 = parseInt(value1);
    const num2 = parseInt(value2);
    const sum = num1 / num2;

    setResult(sum);
  };
  // reset
  const reset = () => {
    setValue1('');
    setValue2('');

    setResult('00');
  };


  // style
  const btnStyle = {
    fontWeight: "500",
    background: "antiquewhite",
    fontSize: "20px",
    padding: ".5em",
    borderRadius: "5px",
    width: "100%",
    border: 'solid 2px black',
    cursor: "pointer",
  };
  const btnReset = {
    fontWeight: "500",
    background: "orange",
    fontSize: "20px",
    padding: ".5em",
    borderRadius: "5px",
    width: "100%",
    border: 'solid 2px black',
    cursor: "pointer",
  };

  return (
    <>
      <div className="justify-center w-[500px] h-auto bg-red-300 p-5 mt-20 rounded-md border-none mx-auto">
        {/* display */}
        <div className="output w-full h-auto border-2 bg-black p-2 rounded-md border-none ">
          <p className="text-white right-0 text-3xl text-right ">{result == "" ? "00" : result}</p>
        </div>

        <div className="flex gap-1 w-[450px]mt-5 mx-auto">
          <div className=" mx-auto mt-3">
            <input
              className="p-2 w-[225px] h-[45px] rounded-md text-right text-2xl"
              type="text"
              value={value1}
              onChange={(e) => setValue1(e.target.value)}
              placeholder="Value1"
            />
          </div>
          <div className=" mx-auto mt-3">
            <input
              className="p-2 w-[225px] h-[45px] rounded-md text-right text-2xl"
              type="text"
              value={value2}
              onChange={(e) => setValue2(e.target.value)}
              placeholder="Value2"
            />
          </div>
        </div>

        <div className=" my-5 mt-10 space-y-5">
          <button style={btnStyle} onClick={add}>
            Addition
          </button>
          <button style={btnStyle} onClick={sub}>
            Substract
          </button>
          <button style={btnStyle} onClick={mul}>
            Multiply
          </button>
          <button style={btnStyle} onClick={div}>
            Division
          </button>
          <button style={btnReset} onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
