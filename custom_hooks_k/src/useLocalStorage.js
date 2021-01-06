import { useState, useEffect } from "react";

const getSavedValue = (key, initialValue) => {
  const savedValue = JSON.parse(localStorage.getItem(key));
  console.log('typeof savedValue', typeof savedValue)
  console.log('typeof savedValue', typeof savedValue)
  
  if (savedValue) {
    return savedValue;
  }
  if (initialValue instanceof Function) {
    return initialValue();
  }
  return initialValue;
};

function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

export default useLocalStorage;
