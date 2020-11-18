import { createContext } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";
import onLocalStorage from "../utils/onLocalStorage";

const DesignModeContext = createContext(null);

const LOCAL_STORAGE_KEY = "design-mode";

export const DesignModeProvider = ({ children }) => {
  const [designMode, setDesignMode] = useLocalStorageState(LOCAL_STORAGE_KEY, true);

  const toggleDesignMode = () => setDesignMode(!designMode);

  return (
    <DesignModeContext.Provider value={{ designMode, toggleDesignMode }}>
      {children}
    </DesignModeContext.Provider>
  );
};

export const getDesignModeData = () => onLocalStorage.getItem(LOCAL_STORAGE_KEY);

export default DesignModeContext;
