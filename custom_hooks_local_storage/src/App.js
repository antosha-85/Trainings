import React from "react";
import useLocalStorage from "./useLocalStorage";
import useUpdateConsoleLog from "./useUpdateConsoleLog";

function App() {
  const [name, setName] = useLocalStorage("name1", "");
  useUpdateConsoleLog(name);
  return (
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
  );
}

export default App;
