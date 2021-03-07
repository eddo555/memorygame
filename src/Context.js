import React, { createContext, useEffect, useState } from "react";

const Context = createContext();

function ContextProvider(props) {
  const [list, setList] = useState([]);
  const [reset, setReset] = useState(false);
  const [array, setArray] = useState([]);
  const [match, setMatch] = useState([]);
  const [count, setCount] = useState(0);

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

  const buttonToggle = (value) => {
    setCount((prev) => prev + 1);

    // console.log("Context => ", value);

    setArray((array) => [...array, value]);
  };

  const randomize = () => {
    setReset(!reset);

    setArray([]);
    setMatch([]);
  };

  // console.log("array =>", array);
  if (count === 2) {
    if (array[0] === array[1]) {
      // console.log("match");
      setMatch((match) => [...match, array[0]]);
      setArray([]);
      setCount(0);
    }
    if (array[0] !== array[1]) {
      // console.log("no mach");
      setArray([]);
      setCount(0);
    }
  }
  // console.log("match", match);

  return (
    <Context.Provider value={{ list, buttonToggle, randomize, match }}>
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
