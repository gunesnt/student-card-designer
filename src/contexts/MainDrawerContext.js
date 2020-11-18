import { createContext, useState } from "react";

const MainDrawerContext = createContext(null);

export const MainDrawerProvider = ({ children }) => {
  const [open, setOpen] = useState(false);

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <MainDrawerContext.Provider value={{ open, setOpen, openDrawer, closeDrawer }}>
      {children}
    </MainDrawerContext.Provider>
  );
};

export default MainDrawerContext;
