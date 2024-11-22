import { useEffect, useState } from "react";

export default function useLocalStorageState(key, initialState) {
 /// get initial states from local storage
 const [value, setValue] = useState( initialState ? initialState :
    JSON.parse(localStorage.getItem(key))
  );
/// save states in local storage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);
 
  return {value, setValue}
}