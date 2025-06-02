import { useState } from "react";
import { useEffect } from "react";

const FetchApi = () => {
  // let fruitArr = [1, 2, 3, 4, 5];
  let [apiData, setaAiData] = useState([]);
  useEffect(() => {
    async function fetchApi() {
      const api = await fetch("src/assets/jsonplaceholder.json");
      const data = await api.json();
      setaAiData(data);
      console.log(apiData);
    }
    fetchApi();
  }, []);
  return (
    <div>
      <h1>Fetching Api by Fetch :-</h1>
      {apiData.map((obj, idx) => (
        <div key={idx}>
          <li>
            {obj.name}, {obj.phone}
          </li>
        </div>
      ))}
      <h1>Hello</h1>
    </div>
  );
};

export default FetchApi;
