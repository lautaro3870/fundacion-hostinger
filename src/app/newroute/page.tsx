"use client"
import { useEffect, useState } from "react";

export default function NewRoute() {
  const [data, setData] = useState([]);

  const getData = async() => {
    const response = await fetch("https://swapi.dev/api/people");
    const dataResponse = await response.json();
    setData(dataResponse.results);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>New Route</h1>
      <br />
      <ul>
        {data.map((item: any, index: number) => (
          <li key={index}>{item?.name} - {item?.hair_color}</li>
        ))}
      </ul>
    </div>
  );
}
