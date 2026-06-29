import React, { createContext, FC, ReactNode, useContext, useState } from "react";

type DrawerContextType = {
  isOpen: boolean;
  ToggleDrawer: () => void;
  isplayIconMarked: boolean;
  handleIconClick: () => void;
};

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const DrawerProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [isplayIconMarked, setIsplayIconMarked] = useState<boolean>(true);

  const handleIconClick = (): void => {
    setIsplayIconMarked((prev) => !prev);
  };

  const ToggleDrawer = (): void => {
    setIsOpen((prev) => !prev);
  };

  return <DrawerContext.Provider value={{ isOpen, isplayIconMarked, ToggleDrawer, handleIconClick }}>{children}</DrawerContext.Provider>;
};

export const useGlobalDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error("useGlobalDrawer must be used within a DrawerProvider");
  }
  return context;
};
