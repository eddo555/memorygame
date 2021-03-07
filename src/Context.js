import React, { createContext, useEffect, useState } from "react";

const Context = createContext();

function ContextProvider(props) {
  const [list, setList] = useState([]);
  const [reset, setReset] = useState(false);
  const [array, setArray] = useState([]);

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

    console.log("Context => ", value);

    setArray((array) => [...array, value]);
  };

  const randomize = () => {
    setReset(!reset);

    setArray([]);
  };

  console.log("array =>", array);
  if (count === 2) {
    if (array[0] === array[1]) {
      console.log("same");
      setArray([]);
      setCount(0);
    }
    if (array[0] !== array[1]) {
      console.log("not same");
      setArray([]);
      setCount(0);
    }
  }

  return (
    <Context.Provider value={{ list, buttonToggle, randomize }}>
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
