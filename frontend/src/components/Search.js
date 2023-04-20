import axios from "axios";
import React, { useEffect, useState } from "react";
import Cars from "./Cars";

export default function Search() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("/api/cars")
      .then((response) => {
        setData(response.data.cars);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredData = data.filter((val) => val.model.includes(query));
  console.log(filteredData);

  return (
    <>
      <form>
        <div className="flex items-center border-b-2 border-gray-500 py-2">
          <input
            type="text"
            value={query}
            placeholder="Search by model"
            onChange={(e) => setQuery(e.target.value)}
            className="appearance-none bg-transparent border-none w-full text-gray-200 mr-3 py-1 px-2 leading-tight focus:outline-none"
          />
        </div>
      </form>

      <section>
        <h2 className="m-8 lg:mb-12 text-3xl font-extrabold tracking-tight leading-tight text-center text-white md:text-4xl">
          Shop All Cars
        </h2>
        <div className="grid gap-2 lg:grid-cols-3 m-10">
          {filteredData.map((car) => (
            <Cars car={car}></Cars>
          ))}
        </div>
      </section>
    </>
  );
}
