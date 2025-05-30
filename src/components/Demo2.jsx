// practicing difference between normal,state and ref variable

import { useState, useRef, useEffect } from "react";

const Demo2 = () => {
  let x = 0;
  const [y, setY] = useState(0);
  const ref = useRef(0);
  const i = useRef();
  useEffect(() => {
    i.current = setInterval(() => {
      console.log("React");
    }, 1000);
    return () => clearInterval(i.current);
  }, []);
  return (
    <div
      className={
        "h-[250] w-96 mt-10  border border-black flex flex-col  items-center justify-center space-y-5"
      }
    >
      <div className="flex space-x-2">
        {/* btn to increase normal variable x */}
        {/* normal  variable update  behind but not update UI and on re-render sets back to initial value */}
        <button
          className="bg-green-300  rounded text-sm"
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
        >
          Increase
        </button>

        <h1 className="font-bold">Let={x}</h1>
      </div>
      <div className="flex space-x-2">
        {/* btn to increase state variable */}
        {/* state variable updates abd UI also updates */}
        <button
          className="bg-green-300  rounded text-sm"
          onClick={() => {
            setY(y + 1);
            console.log(y);
          }}
        >
          Increase state
        </button>
        <h1 className="font-bold">State={y}</h1>
      </div>
      <div className="flex space-x-2">
        {/* btn to increase ref */}
        {/* ref keep updating on behind and UI not update as it not cause re-render .but on re-render it updates UI. */}
        <button
          className="bg-green-300  rounded text-sm"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log(ref.current);
          }}
        >
          increase ref
        </button>
        <h1 className="font-bold">Ref={ref.current}</h1>
      </div>
      {/* simple usecase of useref (useEffect and this button ) if start interval it usually stop on when we go other page,here we stop it  by remaining on same page by btn by using useREF */}
      <button
        className="bg-red-600 rounded text-white"
        onClick={() => {
          clearInterval(i.current) && console.log("hi");
        }}
      >
        Stop printing
      </button>
    </div>
  );
};

export default Demo2;
