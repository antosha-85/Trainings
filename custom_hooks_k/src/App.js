import React from "react";
import useLocalStorage from "./useLocalStorage";
import useUpdateConsoleLog from "./useUpdateConsoleLog";
function App() {
  const [name, setName] = useLocalStorage("name", () => "");
  useUpdateConsoleLog(name);
  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>Hi {name}</div>
    </>
  );
}

export default App;
