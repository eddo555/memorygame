import React, { useContext, useState } from "react";
import { Context } from "../Context";
// import useActiveTile from "../Hooks/useActiveTile";

function Board() {
  const { list, buttonToggle, randomize, array, array2 } = useContext(Context);

  // const [isClicked, ref] = useActiveTile();

  console.log("array1 => ", array);
  console.log("array2 => ", array2);
  const boardLayout = list.map((board, index) => (
    // isClicked ? (
    <div
      className="tile"
      key={index}
      // ref={ref}
      onClick={() => buttonToggle(board)}
    >
      {board}
    </div>
    // )
    // : (
    //   <div
    //     className="tile covered"
    //     key={index}
    //     ref={ref}
    //     onClick={() => buttonToggle(board)}
    //   >
    //     {board}
    //   </div>
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
