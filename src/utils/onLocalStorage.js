import isJson from "./isJson";

const onLocalStorage = {
  getItem(localStorageKey) {
    const rawData = localStorage.getItem(localStorageKey);
    const data = rawData && isJson(rawData) ? JSON.parse(rawData) : rawData;
    return data;
  },

  setItem(localStorageKey, data) {
    const dataStr = typeof data === "object" ? JSON.stringify(data) : data;
    localStorage.setItem(localStorageKey, dataStr);
  },
};

export default onLocalStorage;
