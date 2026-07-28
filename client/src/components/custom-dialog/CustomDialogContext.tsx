import React, { createContext, useContext, useState, ReactNode, FC } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Styles from "./customDialog.style.ts";
import { Box } from "@mui/material";
import { DialogContextProps, DialogOptions } from "./customDialogContext.types.ts";

export const DialogContext = createContext<DialogContextProps | undefined>(undefined);

type DialogProviderProps = {
  children: ReactNode;
}

export const DialogProvider: FC<DialogProviderProps> = ({ children }) => {
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
