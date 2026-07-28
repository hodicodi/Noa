import { useContext } from "react";
import { DialogContextProps } from "../components/custom-dialog/customDialogContext.types.ts";
import { DialogContext } from "../components/custom-dialog/CustomDialogContext.tsx";

export const useDialogContext = (): DialogContextProps => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
};