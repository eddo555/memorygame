import React, { createContext, useEffect, useState } from "react";
// import useActiveTile from "./Hooks/useActiveTile";

const Context = createContext();

function ContextProvider(props) {
  const [list, setList] = useState([]);
  const [reset, setReset] = useState(false);
  // const { activate } = useActiveTile();
  const [selectedNumber, setSelectedNumber] = useState();
  const [array, setArray] = useState([]);

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
    setArray((array) => [...array, selectedNumber]);
    // var temp = Array(2);

    // temp.push(selectedNumber);

    // console.log(temp);
    //set array here then setArray
  }, [selectedNumber]);

  const buttonToggle = (value) => {
    console.log("Context => ", value);
    setSelectedNumber(value);
  };

  const randomize = () => {
    setReset(!reset);
  };

  return (
    <Context.Provider value={{ list, buttonToggle, randomize, array }}>
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
