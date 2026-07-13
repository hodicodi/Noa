import * as React from 'react';

export type DialogConfig  = {
  title: string;
  description: string;
  onAgree?: () => void;
}

export const useAlertDialog = () => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [config, setConfig] = React.useState<DialogConfig>({
    title: '',
    description: '',
  });

  const openDialog = React.useCallback((newConfig: DialogConfig) => {
    setConfig(newConfig);
    setOpen(true);
  }, []);

  const closeDialog = React.useCallback(() => {
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
