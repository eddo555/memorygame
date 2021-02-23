import React, { useContext } from "react";
import { Context } from "../Context";

function Board() {
  const { list, buttonToggle, randomize } = useContext(Context);

  const boardLayout = list.map((items, index) => (
    <div className="tile" key={index} onClick={() => buttonToggle(index)}>
      {items}
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
