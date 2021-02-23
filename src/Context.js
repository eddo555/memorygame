import React, { createContext, useEffect, useState } from "react";

const Context = createContext();

function ContextProvider(props) {
  const [list, setList] = useState([]);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    let array = [];

    for (let i = 0; i < 23; i++) {
      array.push(i + 1);
    }

    array = array.sort(() => Math.random() - 0.5);
    setList(array);
  }, [reset]);
  const buttonToggle = (id) => {
    console.log(id + 1);
  };

  const randomize = () => {
    setReset(!reset);
  };
  return (
    <Context.Provider value={{ list, buttonToggle, randomize }}>
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
