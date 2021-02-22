import React, { useContext } from "react";
import { Context } from "./Context";
function App() {
  const msg = useContext(Context);
  return <div>{msg}</div>;
}

export default App;
