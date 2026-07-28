export type DialogOptions = {
  title?: string;
  description: string;
};

export type DialogContextProps = {
  openDialog: (options: DialogOptions) => void;
  closeDialog: () => void;
};