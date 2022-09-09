import React, {useState, useEffect} from "react";


function useLocalStorage(key, initialValue=null) {
  // useState = hook, useEffect = hook
  const [storedValue, setStoredValue] = useState(() => {
    // try = function that will try to get the value from local storage
    try {
      // getItem = function that allows us to get the value of the key in local storage
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
      //catch = function that allows us to catch any errors that may occur
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  }
  );

  useEffect(() => {
    try {
      // setItem = function that allows us to set the value of the key in local storage
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.log(error);
    }
  }
  , [key, storedValue]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;