import React, { useContext } from "react";
import { Context } from "../Context";

function Board() {
  const { list, buttonToggle, randomize, match } = useContext(Context);

  const boardLayout = list.map((board, index) =>
    match.includes(board) ? (
      <div className="tile" key={index} onClick={() => buttonToggle(board)}>
        {board}
      </div>
    ) : (
      <div
        className="tile covered"
        key={index}
        onClick={() => buttonToggle(board)}
      >
        {board}
      </div>
    )
  );

  return (
    <div>
      <div className="container">
        <div className="board-container">
          <div className="board">{boardLayout}</div>
          <div>{match.length === 10 ? alert("board cleared") : null}</div>
        </div>
        <div className="btn" onClick={randomize}>
          Randomize
        </div>
      </div>
    </div>
  );
}

export default Board;
