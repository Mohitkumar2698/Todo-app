// import React from 'react'

const Map = () => {
  const fruitArr = ["Apple", "Banana", "Cherry", "Dragon Fruit", "Mango"];
  return (
    <div>
      <h1 className="text-5xl mb-[1rem]">Rendering by Map Method :-</h1>
      {fruitArr.map((fruit, idx) => (
        <div className="ml-[1rem]" key={idx}>
          <li>{fruit}</li>
        </div>
      ))}
    </div>
  );
};

export default Map;
