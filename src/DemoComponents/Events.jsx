import { useState } from "react";

const Events = () => {
  let [counter, setCounter] = useState(0);
  const plusCount = () => {
    console.log("Button is Clicked!");
    setCounter(counter + 1);
    console.log(counter);
  };
  const minusCount = () => {
    console.log("Button is Clicked!");
    setCounter(counter - 1);
    console.log(counter);
  };
  return (
    <><br />
        <h1>useState Hook with Event Handling</h1>
        <br />
      <div className="flex justify-evenly border-white border-[1px] w-70 p-[1rem] items-center">
        <button className="w-[4rem text-5xl" onClick={plusCount}>
          +
        </button>
        <p className="w-[4rem] text-8xl">{counter}</p>
        <button className=" text-5xl " onClick={minusCount}>
          -
        </button>
      </div>
    </>
  );
};

export default Events;
