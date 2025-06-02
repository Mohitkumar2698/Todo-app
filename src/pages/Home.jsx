import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const fruitArr = ["apple", "banana", "grapes", "mango"];
  const [filteredArr, setFilteredArr] = useState(fruitArr);

  const handleFilter = (e) => {
    const val = e.target.value;
    setFilteredArr(
      fruitArr.filter((element) => element.toLowerCase() === val.toLowerCase())
    );
  };
  const handleNonFilter = () => {
    setFilteredArr(fruitArr);
  };

  return (
    <div>
      <Link
        to={"/login"}
        className="bg-white text-black p-[0.6rem] rounded cursor-pointer"
      >
        Login
      </Link>
      <div className="category-buttons flex justify-around mt-[2rem]">
        <input
          type="button"
          value="Home"
          className="bg-white text-black p-[0.6rem] rounded cursor-pointer"
          onClick={handleNonFilter}
        />
        <input
          type="button"
          value="Mango"
          className="bg-white text-black p-[0.6rem] rounded cursor-pointer"
          onClick={handleFilter}
        />
        <input
          type="button"
          value="Grapes"
          className="bg-white text-black p-[0.6rem] rounded cursor-pointer"
          onClick={handleFilter}
        />
        <input
          type="button"
          value="Banana"
          className="bg-white text-black p-[0.6rem] rounded cursor-pointer"
          onClick={handleFilter}
        />
      </div>
      <div className="film-container flex justify-evenly pt-[2rem]">
        {filteredArr.map((element, idx) => [
          <div key={idx} className="border-white p-[2rem] border">
            <h1>{element}</h1>
          </div>,
        ])}
      </div>
    </div>
  );
};

export default Home;
