import { useState } from "react";
const Demo = () => {
  const [text, setText] = useState();
  return (
    <div className="h-[150] w-96 border border-black">
      <input type="text" value={text} onChange={(e) => e.target.value} />
    </div>
  );
};

export default Demo;
