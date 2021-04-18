import React, { useRef, useState, useEffect } from "react";
import { useFetch } from "./useFetch";

export const Hello = () => {
  const [count3, setCount3] = useState(() =>
    JSON.parse(localStorage.getItem("count3") || 0)
  );
  const { data, loading } = useFetch(`http://numbersapi.com/${count3}/trivia`);
  useEffect(() => {
    localStorage.setItem("count3", JSON.stringify(count3));
  }, [count3]);
  // React.useEffect(() => {
  //   console.log("render");
  //   return () => {
  //     console.log("unmount!");
  //   };
  // }, []);
  // const renders = useRef(0);
  // console.log(`hello renders: ${renders.current++}`)
  return (
    <div>
      <div>Hello!</div>
      <div>{!data ? "...loading" : data}</div>
      <div>count3: {count3}</div>
      <button onClick={() => setCount3(count3 + 1)}>
        New count(increment)
      </button>
    </div>
  );
};
