import { useState, useEffect } from "react";
import onLocalStorage from "../utils/onLocalStorage";

const useLocalStorageState = (localStorageKey, initialValue) => {
  const [state, _setState] = useState(initialValue);

  useEffect(() => {
    const data = onLocalStorage.getItem(localStorageKey);
    if (data !== null) _setState(data);
  }, []); // eslint-disable-line

  const setState = (data) => {
    _setState(data);
    onLocalStorage.setItem(localStorageKey, data);
  };

  return [state, setState];
};

export default useLocalStorageState;
