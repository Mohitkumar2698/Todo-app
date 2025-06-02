// import React from "react";

const Filter = () => {
  const fruitArr = [
    { name: "Apple", display: true },
    { name: "Mango", display: true },
    { name: "Banana", display: true },
    { name: "Pineapple", display: false },
    { name: "Cherry", display: false },
  ];
  const filteredFruitArr = fruitArr.filter((fruit) => fruit.display);
  return (
    <div>
      <h1 className="text-5xl mb-[1rem]">Rendering by Filter Method:-</h1>
      {filteredFruitArr.map((fruit, idx) => (
        <div className="ml-[1rem]" key={idx}>
          <li>{fruit.name}</li>
        </div>
      ))}
    </div>
  );
};

export default Filter;
