import { useState } from "react";

function useActiveTile() {
  const [state, setState] = useState(false);
  function activate() {
    setState((prev) => !prev);
  }
  return { state, activate };
}

export default useActiveTile;
