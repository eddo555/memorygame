import React, { createContext, useEffect, useState } from "react";

const Context = createContext();

function ContextProvider(props) {
  const [list, setList] = useState([]);

  useEffect(() => {
    let array = [];

    for (let i = 0; i < 15; i++) {
      array.push(i++);
    }
    array = array.sort(() => Math.random() - 0.5);
    setList(array);
  }, []);
  return <Context.Provider value={{ list }}>{props.children}</Context.Provider>;
}

export { Context, ContextProvider };
