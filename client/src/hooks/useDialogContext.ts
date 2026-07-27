import { useContext } from "react";
import { DialogContextProps } from "../components/custom-dialog/CustomDialogContext.types.ts";
import { DialogContext } from "../components/custom-dialog/CustomDialogContext.tsx";

export const useDialog = (): DialogContextProps => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
};