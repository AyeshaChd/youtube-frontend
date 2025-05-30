//practice of useMemo hook

import { useState, useMemo } from "react";
import { findNthPrime } from "../Utils/Helper";
const Demo = () => {
  const [text, setText] = useState();
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const prime = useMemo(() => findNthPrime(text), [text]);
  // after 7 inputs browser is gone /stuck  so we will give 6 inputs or less without memo ,will see  toggle is very slow bcz calculation is again performed on rendering due to isDarktheme state variable change
  // if we use useMemo then toggle will be fast bcz calculation is not performed for the same input.

  console.log("rendering");
  return (
    <div
      className={
        "h-[250] w-96 mt-10  border border-black " +
        (isDarkTheme && " text-white bg-black")
      }
    >
      <div>
        <div className="text-center mt-3 text-[.5xl] p-5">
          <button
            className="mt-2 border  border-black rounded bg-green-300 text-[.5xl] text-black text-small"
            onClick={() => {
              setIsDarkTheme(!isDarkTheme);
            }}
          >
            toggle
          </button>
        </div>
      </div>
      <div>
        <input
          type="number"
          className="mt-6 ml-5 bg-zinc-400 border border-rounded"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <h1 className="ml-5 mt-6 font-bold">nth Prime number:{prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
