import { useEffect } from "react";

const useUpdateConsoleLog = (value) => {
  useEffect(() => {
    console.log(value);
  }, [value]);
};

export default useUpdateConsoleLog;
