import React, { createContext } from "react";

const Context = createContext();

function ContextProvider(props) {
  return (
    <Context.Provider value="hello world">{props.children}</Context.Provider>
  );
}

export { Context, ContextProvider };
