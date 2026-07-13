import { useCallback, useState } from "react";
import { defaultConfig } from "./useDialog.consts.ts";

type DialogConfig = {
  title: string;
  description: string;
  onAgree?: () => void;
};

export const useAlertDialog = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [config, setConfig] = useState<DialogConfig>(defaultConfig);

  const openDialog = useCallback((newConfig: DialogConfig) => {
    setConfig(newConfig);
    setOpen(true);
  }, []);

  const closeDialog = useCallback(() => {
    setOpen(false);
  }, []);

  const dialogProps = {
    open,
    title: config.title,
    description: config.description,
    onAgree: config.onAgree,
    onClose: closeDialog,
  };

  return {
    openDialog,
    closeDialog,
    dialogProps,
  };
};
