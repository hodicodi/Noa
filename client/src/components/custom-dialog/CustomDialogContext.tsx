import React, { createContext, useContext, useState, ReactNode } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Styles from "./customDialog.style.ts";
import { Box } from "@mui/material";

type DialogOptions = {
  title?: string;
  description: string;
};

type DialogContextType = {
  openDialog: (options: DialogOptions) => void;
  closeDialog: () => void;
};

const DialogContext = createContext<DialogContextType | undefined>(undefined);

interface DialogProviderProps {
  children: ReactNode;
}

export const DialogProvider: React.FC<DialogProviderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<DialogOptions | null>(null);

  const openDialog = (dialogOptions: DialogOptions) => {
    setOptions(dialogOptions);
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <DialogContext.Provider value={{ openDialog, closeDialog }}>
      {children}
      {isOpen && options && (
        <Dialog sx={Styles.dialogModal} open={isOpen} role="alertdialog">
          <Box sx={Styles.dialogContent}>
            <DialogTitle>{options.title}</DialogTitle>
            <DialogContent>
              <DialogContentText sx={Styles.dialogText}>{options.description}</DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={() => setIsOpen(false)}>OK</Button>
            </DialogActions>
          </Box>
        </Dialog>
      )}
    </DialogContext.Provider>
  );
};

export const useDialog = (): DialogContextType => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
};
