import React, { createContext, useEffect, useState } from "react";
// import useActiveTile from "./Hooks/useActiveTile";

const Context = createContext();

function ContextProvider(props) {
  const [list, setList] = useState([]);
  const [reset, setReset] = useState(false);
  // const { activate } = useActiveTile();
  const [selectedNumber, setSelectedNumber] = useState();
  const [array, setArray] = useState([]);
  const [array2, setArray2] = useState([]);
  const [count, setCount] = useState(0);

  const [index, setIndex] = useState();

  useEffect(() => {
    let num = [];

    for (let i = 0; i < 10; i++) {
      num.push(i + 1);
    }
    for (let j = 0; j < 10; j++) {
      num.push(j + 1);
    }

    num = num.sort(() => Math.random() - 0.5);
    setList(num);
  }, [reset]);

  useEffect(() => {
    activeTiles();
    console.log("includes 1??", array.includes(1));
    console.log("includes 2??", array2.includes(1));
    count % 2 === 0
      ? setArray((array) => [...array, selectedNumber])
      : setArray2((array2) => [...array2, selectedNumber]);
    // if match
    if (array.length > 0) {
      setArray([]);
    }
    if (array2.length > 0) {
      setArray2([]);
    }
  }, [count]);

  const buttonToggle = (value) => {
    setCount((prev) => prev + 1);

    console.log("Context => ", value);
    setSelectedNumber(value);
  };

  const randomize = () => {
    setReset(!reset);
    setArray([]);
    setArray2([]);
  };

  const activeTiles = () => {};

  return (
    <Context.Provider value={{ list, buttonToggle, randomize, array, array2 }}>
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
