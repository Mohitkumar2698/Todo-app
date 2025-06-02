import { useEffect } from "react";
import { useState } from "react";

const UseEffect = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    document.title = counter;
    console.log("useEffect Running!");
  }, [counter]);
  return (
    <div>
      <h1>UseEffect Hook :-</h1>
      <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Click me!</button>
    </div>
  );
};

export default UseEffect;
