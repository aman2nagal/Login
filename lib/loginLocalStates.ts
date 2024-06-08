// utils/sessionStorageUtils.js

export const getSessionStorageObject = (key) => {
    const storedValue = sessionStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : null;
  };
  
  export const setSessionStorageObject = (key, value) => {
    sessionStorage.setItem(key, JSON.stringify(value));
  };
  