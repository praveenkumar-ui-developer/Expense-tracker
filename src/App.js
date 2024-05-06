import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [query, setQuery] = useState();
  const [data, setData] = useState();

  const fetchData = () => {
    try {
      const response = axios.get(
        `https://dummyjson.com/products/search?q=${query}`,
      );
      setData(response.data);
    } catch (error) {
      console.log("error fetching api");
    }
  };
  const fetched = () => {
    if (event.key === "Enter") {
      fetchData();
    }
  };
  return (
    <div>
      <div>
        <input
          type="text"
          value={query}
          onKeyPress={fetched}
          placeholder="enetr Query"
        />
      </div>
    </div>
  );
}

export default App;
