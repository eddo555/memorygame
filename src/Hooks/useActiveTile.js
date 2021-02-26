import { useState, useEffect, useRef } from "react";

function useActiveTile() {
  const [isClicked, setIsClicked] = useState(false);
  const ref = useRef(false);

  function toggle() {
    setIsClicked((prev) => !prev);
  }

  useEffect(() => {
    setIsClicked((prev) => !prev);
    ref.current = true;
  }, []);

  return [isClicked, ref];
}

export default useActiveTile;
