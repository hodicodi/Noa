import React, { createContext, useContext, useState } from 'react';

type DrawerContextType = {
  isOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  isplayIconMarked: boolean;
  handleIconClick: () => void;
};

const DrawerContext = createContext<DrawerContextType | undefined>(undefined);

export const DrawerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const [isplayIconMarked, setIsplayIconMarked] = useState<boolean>(true);

  const handleIconClick = (): void => {
    setIsplayIconMarked((prev) => !prev);
  };


  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  return (
    <DrawerContext.Provider value={{ isOpen, isplayIconMarked, openDrawer, closeDrawer, handleIconClick }}>
      {children}
    </DrawerContext.Provider>
  );
};

export const useGlobalDrawer = () => {
  const context = useContext(DrawerContext);
  if (!context) {
    throw new Error('useGlobalDrawer must be used within a DrawerProvider');
  }
  return context;
};
