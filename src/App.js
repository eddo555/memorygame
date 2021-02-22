import React, { useContext } from "react";
import { Context } from "./Context";
function App() {
  const { list } = useContext(Context);
  return <div>{list}</div>;
}

export default App;
