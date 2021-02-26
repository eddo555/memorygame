import React, { useContext, useState } from "react";
import { Context } from "../Context";
// import useActiveTile from "../Hooks/useActiveTile";

function Board() {
  const { list, buttonToggle, randomize, array } = useContext(Context);

  console.log("array board => ", array);
  const boardLayout = list.map((board, index) => (
    <div
      className="tile"
      key={index}
      onClick={() => buttonToggle(board)}
      // onClick={() =>
      //   setSelectedNumber((selectedNumber) => [...selectedNumber, index])
      // }
    >
      {board}
    </div>
  ));

  return (
    <div>
      <div className="container">
        <div className="board-container">
          <div className="board">{boardLayout}</div>
        </div>
        <div className="btn" onClick={randomize}>
          Randomize
        </div>
      </div>
    </div>
  );
}

export default Board;
