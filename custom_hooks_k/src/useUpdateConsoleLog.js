import { useEffect } from "react";

export default function useUpdateConsoleLog(value) {
  useEffect(() => {
    console.log(value);
  }, [value]);
}
